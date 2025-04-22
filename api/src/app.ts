import cors from 'cors';
import clientsRouter from './routes/clients';
import express, { Request, Response } from 'express';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}))
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.json({
        message: 'Available routes',
        routes: [
            'POST /api/v1/clients',
            'GET /api/v1/clients/:id',
            'PUT /api/v1/clients/:id',
            'DELETE /api/v1/clients/:id',
        ]
    });
});

app.use('/api/v1/clients', clientsRouter);

app.use((req, res) => {
    res.status(404).json({ message: `Cannot ${req.method} ${req.originalUrl}` });
});

app.use(errorHandler);

export default app;
