import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from './services';
import { NewProductBody } from './schema';
import { date } from 'zod';

export async function newProductHandler(req: Request<{}, {}, NewProductBody>, res: Response) {
  const { name, brand, description, expiryDate, price, barCode, img } = req.body;

  try {
    const newProduct = await createProduct({ name, brand, description, expiryDate, price, barCode, img });
    if (!newProduct) {
      res.status(StatusCodes.CONFLICT).send(`Product with code ${barCode} already exists`);
    }
    res.status(StatusCodes.CREATED).json({ product: newProduct });
  } catch (e: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
}

export async function getProductsHandler(req: Request, res: Response) {
  try {
    const products = await getProducts();
    res.status(StatusCodes.OK).json({ products });
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

export async function getProductHandler(req: Request, res: Response) {
  try {
    const { barCode } = req.params;
    const product = await getProduct(barCode);
    res.status(StatusCodes.OK).json({ product });
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

export async function updateProductHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { body } = req;
    const product = await updateProduct(id, body);
    res.status(StatusCodes.OK).json({ product });
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

export async function deleteProductHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const product = await deleteProduct(id);
    res.status(StatusCodes.OK).json({ product });
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
  }
}
