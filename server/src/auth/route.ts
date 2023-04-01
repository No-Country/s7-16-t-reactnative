import { Router } from "express";
import passport from "passport";
import { login, register } from "./controller";


const router: Router = Router();

router.post('/register', register);

router.post('/login', passport.authenticate("auth-local", {
    successRedirect: "/api/auth/login",
    failureRedirect: "/api/auth/login/failed",
    failureFlash: true
}));

router.get('/login', login)

export default router;