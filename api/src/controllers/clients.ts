import { Request, Response } from 'express';
import { PrismaClient } from '../../prisma/generated/client';

const prisma = new PrismaClient();

export const getClients = async (req: Request, res: Response): Promise<void> => {
    const clients = await prisma.client.findMany();

    res.json({ clients: clients });
};
