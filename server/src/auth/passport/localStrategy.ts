import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local"
import { UserModel } from "../../entity/user/model";
import bcrypt from "bcrypt"

passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
    },
        async (username, password, done) => {
            try {
                const user = await UserModel.findOne({ email: username });
                const userPassword: any = await UserModel.findOne({ email: username }).select('password');
                if (!user) {
                    return done(null, false, { message: 'email incorrecto' })
                }
                const isPasswordValid = await bcrypt.compare(password, userPassword.password);
                if (!isPasswordValid) {
                    return done(null, false, { message: 'contraseña incorrecta' })
                }
                done(null, user)
            } catch (error) {
                return done({ message: 'contraseña incorrecta' })
            }
        }
    ),
);

passport.serializeUser((user: any, done) => {
    done(null, user._id);
})

passport.deserializeUser(async (id, done) => {
    const user = await UserModel.findOne({ _id: id });
    done(null, user)
})
