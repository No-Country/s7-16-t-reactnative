
import dotenv from 'dotenv'
dotenv.config();

export default {
    port: process.env.PORT || 4000,
    nodemailerUser: process.env.NODEMAILER_USER || "",
    nodemailerPassword: process.env.NODEMAILER_PASSWORD || ""
}