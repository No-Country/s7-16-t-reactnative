import { Request, Response, NextFunction } from 'express';
import { decodeToken } from './jwt';

export interface IDecoded {
  user: {
    carts:Array<any>;
    _id: string;
    email:string;
    firstName: string;
    lastName: string;
    profilePic: string;
    documentType: string;
    dni:number;
    genre: string;
    birthdate: string;
    phNumber: number;
    isAdmin: boolean;
    createdAt: string;
    updatedAt: string;
    __v: any;
  };
}

function deserializeUser(req: Request, res: Response, next: NextFunction) {
  const accessToken = (req.headers.authorization || '').replace(/^Bearer\s/, '');

  if (!accessToken) {
    return next();
  }

  const decoded = <IDecoded>decodeToken(accessToken);
  
  if (decoded) {
    res.locals.user = decoded.user;
  }

  return next();
}

export default deserializeUser;
