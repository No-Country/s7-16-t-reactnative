import { Request, Response, NextFunction } from 'express';

const ownership = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { _id, isAdmin } = res.locals.user;
    const { id } = req.params;

    //if (Number(isAdmin) === true) {
    if (_id === id) {
      return next();
    } else {
      res.status(403).send('You do not have the necessary permissions');
    }
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export default ownership;
