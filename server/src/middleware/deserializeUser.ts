import { Request, Response, NextFunction } from "express";


function deserializeUser(req: Request, res: Response, next: NextFunction) {
  const accessToken = (
    req.headers.authorization||""
  ).replace(/^Bearer\s/, "");

  if (!accessToken) {
    return next();
  }
console.log(accessToken);

  const decoded ="" //TODO:function decode JWT

  if (decoded) {
    res.locals.user = decoded;
  }

  return next();
}

export default deserializeUser;
