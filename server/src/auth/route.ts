// import { Router } from "express";
// import passport from "passport";
// import { login, register } from "./controller";
// import { StatusCodes } from "http-status-codes";

// import { Strategy as LocalStrategy } from "passport-local"
// import bcrypt from "bcrypt"
// import { UserModel } from "../entity/user/model";

// passport.use(
//     new LocalStrategy({
//         usernameField: 'email',
//         passwordField: 'password',
//     },
//         async (username, password, done) => {
//             try {
//                 const user = await UserModel.findOne({ email: username });
//                 const userPassword: any = await UserModel.findOne({ email: username }).select('password');
//                 if (!user) {
//                     return done(null, false, { message: 'email incorrecto' })
//                 }
//                 const isPasswordValid = await bcrypt.compare(password, userPassword.password);
//                 if (!isPasswordValid) {
//                     return done(null, false, { message: 'contraseña incorrecta' })
//                 }
//                 done(null, user)
//             } catch (error) {
//                 return done({ message: 'contraseña incorrecta' })
//             }
//         }
//     ),
// );

// passport.serializeUser((user: any, done) => {
//     done(null, user._id);
// })

// passport.deserializeUser(async (id, done) => {
//     const user = await UserModel.findOne({ _id: id });
//     done(null, user)
// })

// const router: Router = Router();

// router.post('/register', register);

// router.post('/login', passport.authenticate('local', {
//     successRedirect: "/api/auth/login",
//     failureRedirect: "/api/auth/login/failed",
//     failureFlash: true
// }));

// router.get('/login', login);

// export default router;

import { Router } from 'express';
import { login, register } from './controller';



const router: Router = Router();

router.post('/register', register);

router.post('/login', login);

export default router;