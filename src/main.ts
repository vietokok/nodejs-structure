import express, { Application, Request, Response } from 'express';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Boot express
const app: Application = express();

app.use(helmet());
// compress all responses
app.use(compression());
// cors policy
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Application routing
app.use('/', (req: Request, res: Response) => {
  res.status(200).send({ data: 'Hello vietokok' });
});

// Start server
app.listen(5000, () => console.log(`Server is listening on port 5000!`));
