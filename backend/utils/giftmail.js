import path from 'path';
import ejs from 'ejs';
import { transporter } from "../config/mailconfig.js"; // Nodemailer transporter configuration
import { fileURLToPath } from 'url'; // Required to handle __dirname in ES modules

// Get the __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sendCouponEmail = async (email, customerCoupon, coupon) => {
    const { secretCodes, giftNotes, name } = customerCoupon;
    const { imgSrc, title } = coupon;

    // Path to the EJS template
    const templatePath = path.join(__dirname, '../utils/mailhtml.ejs');

    try {
        // Render the EJS template with dynamic data
        const emailHtml = await ejs.renderFile(templatePath, {
            name,
            giftNotes,
            secretCodes,
            imgSrc,
            title
        });

        const mailOptions = {
            from: 'aliakram9789@gmail.com', // Sender email address
            to: email, // Recipient email address
            subject: 'BRAAISHACK: GIFT COUPONS', // Email subject
            html: emailHtml,
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

export default sendCouponEmail;
