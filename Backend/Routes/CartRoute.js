import express from 'express';import {
  addToCart,
  RemoveFromCart,
  getCart,
} from '../controller/cartContoller.js';
import authMiddleware from '../middleware/Auth.js';
const cartRouter = express.Router();

cartRouter.post('/add', authMiddleware, addToCart);
cartRouter.post('/remove', authMiddleware, RemoveFromCart);
cartRouter.post('/get', authMiddleware, getCart);

export default cartRouter;
