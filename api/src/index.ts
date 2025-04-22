import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from TypeScript + Express!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
