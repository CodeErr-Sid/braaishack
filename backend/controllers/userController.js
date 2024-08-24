import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import userModel from "../models/userModel.js";

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
            sameSite:"None",
            maxAge: 3600000 // 1 hour in milliseconds
        });

        res.status(200).json({ success: true, message: "Logged in successfully",token });
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

export { loginUser, registerUser, logoutUser, checkLogin }