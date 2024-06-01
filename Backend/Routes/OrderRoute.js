import express from 'express';
import authMiddleware from '../middleware/Auth.js';

import {placeOrder} from '../controller/OrderController.js';

const orderRouter = express.Router();

orderRouter.post('/place', authMiddleware, placeOrder);

export default orderRouter;
