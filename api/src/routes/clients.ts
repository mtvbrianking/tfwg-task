import express from 'express';
import {
    getClients,
    getClient,
    deleteClient
} from '../controllers/clients';

const router = express.Router();

router.get('/', getClients);
router.get('/:id', getClient);
router.delete('/:id', deleteClient);

export default router;
