import { transporter } from "../config/mailconfig.js";

const sendCouponEmail = async (email, customerCoupon) => {
    const { secretCodes, name, quantity } = customerCoupon;

    // Generate HTML content for the email
    const secretCodesHTML = secretCodes.map((code) => {
        return `<li>${code.code}</li>`;
    }).join("");

    const mailOptions = {
        from: 'your-email@gmail.com',  // Sender email address
        to: email,  // Recipient email address
        subject: 'Your Coupon Codes',  // Email subject
        html: `
        <h1>Thank you for your order, ${name}!</h1>
        <p>You have successfully purchased ${quantity} coupon(s). Here are your coupon codes:</p>
        <ul>
          ${secretCodesHTML}
        </ul>
        <p>Your coupons will expire in 30 days from now.</p>
      `,
    };

    try {
        // Send the email
        const info = await transporter.sendMail(mailOptions);
        //   console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};


export default sendCouponEmail;
