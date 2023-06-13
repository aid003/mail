import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_EMAIL_ADDRESS,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export const mailOptions = {
  from: process.env.GMAIL_EMAIL_ADDRESS,
  to: process.env.GMAIL_EMAIL_ADDRESS,
};
