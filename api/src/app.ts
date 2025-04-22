import cors from 'cors';
import clientsRouter from './routes/clients';
import express, { Request, Response } from 'express';

const app = express();

app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}))
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from TypeScript + Express!');
});

app.use('/api/v1/clients', clientsRouter);

export default app;
