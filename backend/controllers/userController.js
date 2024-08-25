import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import userModel from "../models/userModel.js";
import crypto from "crypto"; // For generating OTP
import nodemailer from "nodemailer"; // For sending emails

//create token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Set token expiration as needed
}

//checkLogin

// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        const token = createToken(user._id);

        // Set the token in a secure, HTTP-only cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Set secure flag to true in production
            sameSite: "None",
            maxAge: 3600000 // 1 hour in milliseconds
        });

        res.status(200).json({ success: true, message: "Logged in successfully", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error" });
    }
}

//checkLogin
const checkLogin = async (req, res, next) => {
    try {
        // Get the token from the request body
        const { token } = req.body;

        // Check if token is available
        if (!token) {
            return res.status(401).json({ success: false, message: "Access denied. No token provided." });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find the user by decoded id
        const user = await userModel.findById(decoded.id);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found." });
        }

        // Attach user information to the request object
        req.user = user;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ success: false, message: "Invalid token or token expired." });
    }
};

// logout user
const logoutUser = async (req, res) => {
    try {
        // Clear the token cookie
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production'
        });

        res.status(200).json({ success: true, message: "Logged out successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error" });
    }
};


//register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        //check if user already exists
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: "User already exists" })
        }

        // validating email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10); // the more no. round the more time it will take
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({ name, email, password: hashedPassword })
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({ success: true, token })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

const forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: "User does not exist" });
        }

        // Generate a 6-digit OTP
        const otp = crypto.randomInt(100000, 999999).toString();

        // Set OTP expiration time (30 minutes from now)
        const otpExpires = Date.now() + 30 * 60 * 1000;

        // Update the user with the OTP and expiration time
        user.otp = otp;
        user.otpExpires = otpExpires;
        await user.save();

        // Send OTP via email (nodemailer setup required)
        // Here you should configure your email transporter
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure:false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.MAIL_USER,
            to: email,
            subject: 'Your OTP for Password Reset',
            text: `Your OTP is ${otp}. It will expire in 30 minutes.`,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: "OTP sent to your email" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error in sending OTP" });
    }
};

const verifyOtp = async (req, res) => {
    const { email, otp } = req.body;

    try {
        const user = await userModel.findOne({ email });

        if (!user || user.otp !== otp || user.otpExpires < Date.now()) {
            return res.status(401).json({ success: false, message: "Invalid or expired OTP" });
        }

        // OTP is valid, proceed to the next step
        res.status(200).json({ success: true, message: "OTP verified successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error in verifying OTP" });
    }
}

const resetPassword = async (req, res) => {
    const { email, newPassword } = req.body;

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: "User does not exist" });
        }

        // Hash the new password (assuming bcrypt is used)
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update the password and clear the OTP fields
        user.password = hashedPassword;
        user.otp = undefined; // Clear OTP
        user.otpExpires = undefined; // Clear OTP expiration time
        await user.save();

        res.status(200).json({ success: true, message: "Password reset successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error in resetting password" });
    }
}


export { loginUser, registerUser, logoutUser, checkLogin, forgotPassword, verifyOtp, resetPassword }