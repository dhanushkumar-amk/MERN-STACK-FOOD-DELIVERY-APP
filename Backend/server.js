import express from 'express';import cors from 'cors';
import {connectDB} from './Config/Db.js';
import foodRouter from './Routes/foodRoute.js';
import userRouter from './Routes/UserRoute.js';
import 'dotenv/config.js';
import cartRouter from './Routes/CartRoute.js';
import orderRouter from './Routes/OrderRoute.js';

// App config
const app = express();
const port = process.env.PORT || 4000; // use logical OR (||) instead of bitwise OR (|)

// Middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// API Endpoints
app.use('/api/food', foodRouter);
app.use('/images', express.static('Uploads'));
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) => {
  res.send('API working');
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
