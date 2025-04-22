import express from 'express';
import {
    getClients,
    getClient
} from '../controllers/clients';

const router = express.Router();

router.get('/', getClients);
router.get('/:id', getClient);

export default router;
