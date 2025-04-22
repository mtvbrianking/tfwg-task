import express from 'express';
import {
    createClient,
    getClients,
    getClient,
    updateClient,
    deleteClient
} from '../controllers/clients';

const router = express.Router();

router.post('/', createClient);
router.get('/', getClients);
router.get('/:id', getClient);
router.put('/:id', updateClient);
router.delete('/:id', deleteClient);

export default router;
