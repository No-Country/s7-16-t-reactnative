import { validateToken } from "../../middleware/jwt";
import { Request, Response } from "express";

export const getTokenCartId = (req: Request) => {
    let token, tokenCartId;
    if (req.headers.authorization && req.headers.authorization.startsWith('jwt')) {
        token = req.headers.authorization.split(' ')[1]
    }
    const decodedToken = validateToken(token);
    if (!decodedToken.User.Cart) {
        throw new Error(`User does not have a cart`)
    }
    return tokenCartId = decodedToken.user.Cart.id;
}