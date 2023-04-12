import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import passport from 'passport';
import { UserModel } from '../entity/user/model';
import { sendEmail } from '../providers/email.service';
import welcome from '../providers/templates/welcome';
import { Strategy as LocalStrategy } from 'passport-local';
import { generateToken } from "../middleware/jwt";

passport.use(
  'login',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        const user = await UserModel.findOne({ email });

        if (!user) {
          return done(null, false, { message: 'email incorrecto' });
        }

        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
          return done(null, false, { message: 'contraseña incorrecta' });
        }

        done(null, user, { message: 'Login success' });
      } catch (error) {
        return done(error);
      }
    },
  ),
);

export const register = async (req: Request, res: Response) => {
  const { firstName, lastName, photo, phNumber, dni, email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });

    if (user) {
      return res.status(StatusCodes.CONFLICT).json({
        error: true,
        message: `User already exists, e-mail, phone number and dni must be unique`,
      });
    }

    const newUser = new UserModel({
      firstName,
      lastName,
      photo,
      phNumber,
      email,
      password,
      dni,
    });
    await newUser.save();

    let welcomeTemplate = welcome(firstName, lastName);
    sendEmail(email, 'Bienvenido a SmartShop', welcomeTemplate);

    res.status(200).send({
      error: false,
      message: 'User was successfully created',
    });
  } catch (error: any) {
    res.status(400).json({
      error: true,
      message: error.message,
    });
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('login', async (err: any, user: any, info: any) => {
    try {
      if (err || !user) {
        throw new Error('Fail: non-existent user or invalid password');
      }
      req.login(user, { session: false }, async (err: any) => {
        const userResponse = {
          carts: user.carts,
          _id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          profilePic: user.photo,
          dni: user.dni,
          phNumber: user.phNumber,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          __v: user.__v,
        };
        
        const token = generateToken(userResponse);

        return res.status(StatusCodes.OK).json({
          message: 'User access successfully',
          userResponse,
          token,
        });
      });
    } catch (error: any) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message);
    }
  })(req, res, next);
};

export const loginSuccess = (req: Request, res: Response): void => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: 'Has iniciado sec¿sion con exito',
      user: req.user,
    });
  } else {
    res.status(403).json({
      error: true,
      message: 'No estas autorizado',
    });
  }
};

export const loginFailed = (req: Request, res: Response) => {
  res.status(400).json({
    error: true,
    message: 'Login Failed',
  });
};

export const logout = (req: Request, res: Response, next: NextFunction) => {
  req.logout((error) => {
    if (error) {
      return next(error);
    }
    res.redirect('http://localhost:3000/');
  });
};
