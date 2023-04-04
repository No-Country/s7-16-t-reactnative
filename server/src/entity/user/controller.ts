import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { createUser } from './services';
import { RegisterUserBody } from './schema';

export async function registerUserHandler(req: Request<{}, {}, RegisterUserBody>, res: Response) {
  const { firstName, lastName, dni, email, password } = req.body;

  try {
    await createUser({ firstName, lastName, dni, email, password });

    return res.status(StatusCodes.CREATED).send('user created successfully');
  } catch (e: any) {
    if (e.code === 11000) {
      return res.status(StatusCodes.CONFLICT).send('User already exists');
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
}
