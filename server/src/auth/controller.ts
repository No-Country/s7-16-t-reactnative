import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import passport from "passport";
import { UserModel } from "../entity/user/model";
import { sendEmail } from "../providers/email.service";
import welcome from "../providers/templates/welcome";
import { Strategy as LocalStrategy } from "passport-local"

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
    const { firstName, lastName, dni, email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email: email })

        if (user) {
            return res.status(200).json({
                error: true,
                message: `User ${firstName} ${lastName} ya existe`
            })
        }

        const newUser = new UserModel({
            firstName,
            lastName,
            email,
            password,
            dni,
        });
        await newUser.save();

        let welcomeTemplate = welcome(firstName, lastName);
        sendEmail(email, "Vienvenido a SmartShop", welcomeTemplate)

        res.status(200).send({
            error: false,
            message: "El usuario fue registrado",
        });

    } catch (error) {
        res.status(400).json({
            error: true,
            message: 'Los datos no son validos'
        })
    }
}



export const login = async (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('login', async (err: any, user: any, info: any) => {
        try {
            if (err || !user) {
                throw new Error('Fail: not user or error');
            }
            req.login(user, { session: false }, async (err: any) => {
                const body = { _id: user.id, email: user.email };
                return res.status(StatusCodes.OK).send(body);
            });
        } catch (error: any) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message);
        }
    })(req, res, next);
}

export const loginSuccess = (req: Request, res: Response): void => {
    if (req.user) {
        res.status(200).json({
            error: false,
            message: "Has iniciado sec¿sion con exito",
            user: req.user
        })
    } else {
        res.status(403).json({
            error: true,
            message: "No estas autorizado",
        })
    }
};

export const loginFailed = (req: Request, res: Response) => {
    res.status(400).json({
        error: true,
        message: "Login Failed",
    });
};

export const logout = (req: Request, res: Response, next: NextFunction) => {
    req.logout(error => {
        if (error) {
            return next(error)
        }
        res.redirect("http://localhost:3000/")
    });
};
