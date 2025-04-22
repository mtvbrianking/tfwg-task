import { Request, Response } from 'express';
import { PrismaClient } from '../../prisma/generated/client';

const prisma = new PrismaClient();

export const getClients = async (req: Request, res: Response): Promise<void> => {
    const clients = await prisma.client.findMany();

    res.json({ clients: clients });
};

export const getClient = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);

    const client = await prisma.client.findUnique({ where: { id } });

    if (!client) {
        res.status(404).json({ message: `Client with ID ${id} was not found.` });
        return;
    }

    res.json(client);
};

export const deleteClient = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);

    await prisma.client.delete({ where: { id } });

    res.status(204).send();
};
