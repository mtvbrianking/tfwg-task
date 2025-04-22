import express from 'express';
import {
    createClient,
    getClients,
    getClient,
    deleteClient
} from '../controllers/clients';

const router = express.Router();

router.post('/', createClient);
router.get('/', getClients);
router.get('/:id', getClient);
router.delete('/:id', deleteClient);

export default router;
