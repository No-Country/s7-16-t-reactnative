import "dotenv/config";
import express, { Application } from 'express';
import path from "path";
import cors from 'cors';
import morgan from 'morgan';
import { deserializeUser } from './middleware';
import router from './entity/routes';
import { CORS_ORIGIN, PORT } from './config';
import db from './config/db';
import { setupRoutes } from './config/setupRoutes';

const app: Application = express();
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: CORS_ORIGIN,
  }),
);

setupRoutes(app);

app.use(deserializeUser);

app.use('/api', router);

const server = app.listen(PORT, async () => {
  db().then(() => console.log(`Database connected`));
  console.log(`Server listening at http://localhost:${PORT}`);
});
