import express from 'express';
import {
    getClients
} from '../controllers/clients';

const router = express.Router();

router.get('/', getClients);

export default router;
