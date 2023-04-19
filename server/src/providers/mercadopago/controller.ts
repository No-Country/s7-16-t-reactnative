import { Business } from '../../entity/business/model';
import { Cart, CartModel } from '../../entity/cart/model';
import { getCart, getOpenCart } from '../../entity/cart/services';
import { User, UserModel } from '../../entity/user/model';
import { generatePaymentLink } from './service';
import { Request, Response } from 'express';

export const createCheckout = async (req: Request, res: Response) => {
  try {
    const tokenCartId = res.locals.lastCartId.toString();

    const userId = res.locals.user?._id;
<<<<<<< HEAD
    const cart = await getCart(userId);
=======
    const cart = await getOpenCart(userId);
>>>>>>> a1893468f3ccbdc46a3dbe7fae9c15b7ba24e566
    const customer = res.locals.user;

    const items = [
      {
        id: customer._id,
        currency_id: 'ARS',
        title: 'SmartShop',
        description: 'Tu compra en $negocio',
        quantity: 1,
        unit_price: cart.totalPrice,
      },
    ];

    const payer = {
      userId: customer._id,
      name: customer.firstName,
      surname: customer.lastName,
      email: customer.email,
    };

    const external_reference = tokenCartId;

    let link = await generatePaymentLink(items, payer, external_reference, req);

    res.status(201).json({ link: link?.body.init_point });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const handlePayment = async (req: Request, res: Response) => {
  try {
    const { payment_id, status, external_reference } = req.query;

    if (!payment_id || !status || !external_reference) {
      throw new Error('Please provide payment_id, status and external_reference');
    }
    const responseCarts = await CartModel.findOneAndUpdate(
      { _id: external_reference },
      { status, payment_id },
      {
        new: true,
      },
    );

    if (!responseCarts) {
      throw new Error(`Cart ${external_reference} not found`);
    }

    res.status(200).json({ message: `Payment ${payment_id} was ${status}` });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
