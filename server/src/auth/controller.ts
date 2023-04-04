import { NextFunction, Request, Response } from "express";
import { UserModel } from "../entity/user/model";
import { sendEmail } from "../providers/email.service";
import welcome from "../providers/templates/welcome";

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

export const login = (req: Request, res: Response) => {
    const message = req.flash("error")
    res.json({ message: 'Has sido logeado' })
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
