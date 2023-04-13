import { Request, response, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UserModel } from './model';

export const getAllUsers = async (req: Request, res: Response) => {
  const { limit = 5, from = 0 } = req.query;

  if (!res.locals.user.isAdmin) {
    return res.status(403).json({
      message: 'It route is only for admins',
      error: true,
    });
  }

  if (isNaN(Number(from))) {
    return res.status(400).json({
      message: 'Invalid queries',
      error: true,
    });
  }

  if (isNaN(Number(limit))) {
    return res.status(400).json({
      message: 'Invalid queries',
      error: true,
    });
  }

  const [total, users] = await Promise.all([UserModel.countDocuments(), UserModel.find().skip(Number(from)).limit(Number(limit))]);

  res.json({
    total,
    users,
    error: false,
  });
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await UserModel.findById({ _id: id });
  if (user) {
    return res.json({
      user,
      error: false,
    });
  } else {
    return res.status(404).json({
      message: 'User not found',
      error: true,
    });
  }
};

export const updateUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { _id, role, isActive, verified, emailVerified, googleId, ...rest } = req.body;

  const data = ['email', 'firstName', 'lastName', 'country', 'password'];
  const compare: boolean[] = Object.keys(rest).map((el: string) => {
    if (!data.includes(el)) {
      return true;
    } else {
      return false;
    }
  });

  if (compare.includes(true)) {
    return res.status(400).json({
      error: true,
      message: 'Invalid request body',
    });
  }

  //TODO validar contra db

  const user = await UserModel.findByIdAndUpdate(id, rest, { new: true });
  if (user) {
    res.status(201).json({
      user,
      message: 'User information updated successfully.',
      error: false,
    });
  } else {
    res.status(404).json({
      error: true,
      message: 'User not found',
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await UserModel.findByIdAndDelete(id);

  if (user) {
    res.status(200).json({
      message: 'User deleted successfully',
      error: false,
    });
  } else {
    res.status(404).json({
      error: true,
      message: 'User not found',
    });
  }
};
