import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { createCart, deleteCart, getCart, getCarts, updateCart } from './services';
import { NewCartBody } from './schema';

export async function newCartHandler(req: Request<{}, {}, NewCartBody>, res: Response) {
  const { userId } = req.body;
  try {
    const newCart = await createCart(userId);
    res.status(StatusCodes.CREATED).json({ cart: newCart });
  } catch (e: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
}

export async function getCartsHandler(req: Request, res: Response) {
  try {
    const carts = await getCarts();
    res.status(StatusCodes.OK).json({ carts });
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

export async function getCartHandler(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    const cart = await getCart(userId);
    res.status(StatusCodes.OK).json({ cart });
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

export async function updateCartHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { body } = req;
    console.log(id);

    const cart = await updateCart(id, body);
    res.status(StatusCodes.OK).json({ cart });
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

export async function deleteCartHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const cart = await deleteCart(id);
    res.status(StatusCodes.OK).json({ cart });
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
  }
}
