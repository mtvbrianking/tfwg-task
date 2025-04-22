import { Prisma } from '../../prisma/generated/client';
import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
    err: any,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2025') {
            res.status(404).json({ message: `Missing model record.` });
            return;
        }
    }

    const status = err.status || 500;

    console.error(`Error: ${err.message}`);

    res.status(status).json({ message: 'Something went terribly wrong.' });
};
