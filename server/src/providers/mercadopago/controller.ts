import { Business } from "../../entity/business/model";
import { Cart, CartModel } from "../../entity/cart/model";
import { User } from "../../entity/user/model";
import { getTokenCartId } from "./getTokenCart";
import { generatePaymentLink } from "./service";
import { Request, Response } from "express"

export const createCheckout = async (req: Request, res: Response) => {
    try {

        let tokenCartId = getTokenCartId(req);

        const cart = await CartModel.findByPk(parseInt(tokenCartId));

        const userId = req.user?.id;

        const customer = await User.findOne({
            where: { id: userId },
        });

        if (customer === null) {
            throw new Error(`User not found in database`)
        }

        const [newOrder, created] = await Business.findOrCreate({
            where: { userId: customer.dataValues.id },
            defaults: {
                totalPrice: cart.dataValues.totalPrice
            }
        })

        if (newOrder.dataValues.totalPrice != cart.dataValues.totalPrice) {
            newOrder.update({ totalPrice: parseInt(cart.dataValues.totalPrice) })
        }

        const items = [{
            id: newOrder.dataValues.id,
            currency_id: "ARS",
            title: "A Tempo order",
            description: "A Tempo items",
            quantity: 1,
            unit_price: parseFloat(cart.dataValues.totalPrice),
        }];

        const payer = {
            userId: customer.dataValues.id,
            name: customer.dataValues.firstName,
            surname: customer.dataValues.firstName,
            email: customer.dataValues.email,
        }

        const external_reference = newOrder.dataValues.id.toString();

        let link = await generatePaymentLink(items, payer, external_reference, req);

        res.status(201).json({ "link": link?.body.init_point })

    } catch (error: any) {
        res.status(400).json(({ message: error.message }))
    }
};

export const handlePayment = async (req: Request, res: Response) => {
    try {
        const { payment_id, status, external_reference } = req.query;

        if (!payment_id || !status || !external_reference) {
            throw new Error("Please provide payment_id, status and external_reference")
        }

        await Business.update(
            { status: status, paymentId: payment_id },
            { where: { id: Number(external_reference) } }
        );

        const cart = await CartModel.findByPk(parseInt(req.user.CartModel.id), { include: Product });
        await cart.removeProducts(cart.dataValues.Products);
        await CartModel.update({ totalPrice: 0 }, { where: { id: parseInt(tokenCreq.user.Cart.id) } });

        res.status(200).json(({ message: `Payment ${payment_id} was ${status}` }))

    } catch (error: any) {
        res.status(500).json({ "error": error.message })
    }
};
