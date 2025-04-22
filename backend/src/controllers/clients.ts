import { Request, Response } from 'express';
import { isUnique } from '../validation/rules';
import { clientSchema } from '../schemas/client';
import { PrismaClient } from '../../prisma/generated/client';

const prisma = new PrismaClient();

export const createClient = async (req: Request, res: Response): Promise<void> => {
    const validation = clientSchema.safeParse(req.body);

    if (!validation.success) {
        const { formErrors, fieldErrors } = validation.error.flatten();

        res.status(422).json({
            message: formErrors[0] || 'Validation failed',
            errors: fieldErrors,
        });

        return;
    }

    // ...

    if (await isUnique(req, 'client', 'email')) {
        res.status(422).json({
            message: 'Validation failed',
            errors: { "email": ['The email address is already taken'] },
        });

        return;
    }

    // ...

    const client = await prisma.client.create({ data: req.body });

    res.status(201).json(client);
};

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

export const updateClient = async (req: Request, res: Response): Promise<void> => {
    const validation = clientSchema.safeParse(req.body);

    if (!validation.success) {
        const { formErrors, fieldErrors } = validation.error.flatten();

        res.status(422).json({
            message: formErrors[0] || 'Validation failed',
            errors: fieldErrors,
        });

        return;
    }

    // ...

    if (await isUnique(req, 'client', 'email', 'id')) {
        res.status(422).json({
            message: 'Validation failed',
            errors: { "email": ['Email is already taken by another client.'] },
        });

        return;
    }

    // ...

    const id = parseInt(req.params.id);

    const client = await prisma.client.update({
        where: { id },
        data: req.body,
    });

    res.json(client);
};

export const deleteClient = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);

    await prisma.client.delete({ where: { id } });

    res.status(204).send();
};
