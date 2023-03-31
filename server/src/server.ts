import express, { Application } from 'express';
import cors from 'cors';
import morgan from "morgan"
import { deserializeUser } from './middleware';
import router from './entity/routes';
import { CORS_ORIGIN, PORT } from './config';
import { setupRoutes } from './config/setupRoutes';

const app: Application = express();
app.use(morgan('tiny'))
app.use(express.json());
app.use(
  cors({
    origin: CORS_ORIGIN,
  }),
);

setupRoutes(app)

app.use(deserializeUser);

app.use('/api', router);

const server = app.listen(PORT, async () => {
  //TODO:Conect to db
  console.log(`Server listening at htp://localhost:${PORT}`);
});
