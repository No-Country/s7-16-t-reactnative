import express from 'express';
import cors from 'cors';
import morgan from "morgan"
import { deserializeUser } from './middleware';
import router from './entity/routes';
import { CORS_ORIGIN, PORT } from './config';
import db from "./config/db";

const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(morgan('tiny'))
app.use(express.json());
app.use(
  cors({
    origin: CORS_ORIGIN,
  }),
);

app.use(deserializeUser);

app.use('/api', router);

const server = app.listen(PORT, async () => {
  db().then(() => console.log(`Database connected`))
  console.log(`Server listening at http://localhost:${PORT}`);
});
