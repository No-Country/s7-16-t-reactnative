import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

function requireUser(req: Request, res: Response, next: NextFunction) {
  const user = res.locals.user;

  if (!user) {
    return res.status(StatusCodes.FORBIDDEN).json({
      error: true,
      message: 'You are not authorized to access this route.',
    });
  }

  return next();
}

export default requireUser;
