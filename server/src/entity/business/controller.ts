import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { createBusiness, deleteBusiness, getBusiness, getBusinessList, updateBusiness } from './services';
import { NewBusinessBody } from './schema';

export async function newBusinessHandler(req: Request<{}, {}, NewBusinessBody>, res: Response) {
  const { email, password, names, cuit, address, qrCode, photo } = req.body;

  try {
    const newBusiness = await createBusiness({ email, password, names, cuit, address, qrCode, photo });
    res.status(StatusCodes.CREATED).json({ business: newBusiness });
  } catch (e: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
}

export async function getBusinessListHandler(req: Request, res: Response) {
  try {
    const business = await getBusinessList();
    res.status(StatusCodes.OK).json({ business });
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

export async function getBusinessHandler(req: Request, res: Response) {
  try {
    const { businessId } = req.params;
    const business = await getBusiness(businessId);
    res.status(StatusCodes.OK).json({ business });
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

export async function updateBusinessHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { body } = req;
    const business = await updateBusiness(id, body);
    res.status(StatusCodes.OK).json({ business });
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

export async function deleteBusinessHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const business = await deleteBusiness(id);
    res.status(StatusCodes.OK).json({ business });
  } catch (error: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
  }
}
