import { Request, Response, NextFunction } from 'express';
import { decodeToken } from './jwt';

function deserializeUser(req: Request, res: Response, next: NextFunction) {
  const accessToken = (req.headers.authorization || '').replace(/^Bearer\s/, '');

  if (!accessToken) {
    return next();
  }

  const decoded = decodeToken(accessToken);

  if (decoded) {
    res.locals.user = decoded;
  }

  return next();
}

export default deserializeUser;
