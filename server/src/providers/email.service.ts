import nodemailer from "nodemailer";
import config from "../config/env"

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: config.nodemailerUser,
        pass: config.nodemailerPassword,
    },
})

export const sendEmail = async (
    to: string,
    subject: string,
    html: string
): Promise<boolean> => {
    try {
        await transporter.sendMail({
            from: config.nodemailerUser,
            to: to,
            subject: subject,
            html: html,
        });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};