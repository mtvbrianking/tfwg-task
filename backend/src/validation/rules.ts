import { PrismaClient } from '../../prisma/generated/client';
import { Request } from 'express';

const prisma = new PrismaClient();

/**
 * Checks if a value in the request body is unique for a specific table/field.
 *
 * @param req - Express request object
 * @param table - Prisma model/table name (e.g. 'client')
 * @param field - Field/column to validate (e.g. 'email')
 * @param excludeIdField - Optional field name to exclude by (e.g. 'id')
 * @returns boolean — true if unique, false if taken
 */
export const isUnique = async (
    req: Request,
    table: keyof typeof prisma,
    field: string,
    excludeIdField?: string
): Promise<boolean> => {
    const value = req.body?.[field];
    const excludeId = excludeIdField ? parseInt(req.params?.[excludeIdField]) : undefined;

    const where: any = {
        [field]: value,
    };

    if (excludeId !== undefined && !isNaN(excludeId)) {
        where.NOT = { id: excludeId };
    }

    const record = await (prisma[table] as any).findFirst({
        where,
        select: { id: true },
    });

    return record !== null;
};
