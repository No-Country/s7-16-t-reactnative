import mercadopago from "mercadopago";
import { Request, Response } from "express"

const clientSecret = process.env.CLIENT_SECRET;
const clientId = process.env.CLIENT_ID;

export const generatePaymentLink = async (items: any, payer: any, external_reference: any, req: Request) => {

    const server = 'https://s7-16-t-ts-dep-production.up.railway.app/api';
    const success = `${server}/cart/success`;
    const failure = `${server}/cart/failure`;
    const pending = `${server}/cart/pending`;

    try {

        if (clientSecret && clientId) {
            mercadopago.configure({
                client_id: clientId,
                client_secret: clientSecret,
            });
        }

        const preferenceConfig: any = {
            items,
            back_urls: { success, failure, pending },
            payer,
            auto_return: "approved",
            external_reference,
        }

        const preference = mercadopago.preferences.create(preferenceConfig)

        return preference

    } catch (error) {
        console.log(({ message: (error) }))
    }
}

export const getPaymentStatus = async (payment_id: number, res: Response) => {
    try {
        if (clientSecret && clientId) {
            mercadopago.configure({
                client_id: clientId,
                client_secret: clientSecret,
            });
        }
        const payment = await mercadopago.payment.get(payment_id);
        return payment
    } catch (error: any) {
        res.status(500).send(error.message);
    }
};