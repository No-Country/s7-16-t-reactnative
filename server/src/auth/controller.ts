import { Request, Response } from "express";
import { UserModel } from "../entity/user/model";

export const register = async (req: Request, res: Response) => {
    const { firstName, lastName, DNI, email, password} = req.body;
    try {
        const user = await UserModel.findOne({ email: email})

        if(user) {
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
            DNI,
        });
        await newUser.save();
    } catch(error) {
        res.status(400).json({
            error: true,
            message: 'Datos invalidos'
        })
    }
}

export const login = (req: Request, res: Response) => {
    const message = req.flash("error")
    res.json({message})
}