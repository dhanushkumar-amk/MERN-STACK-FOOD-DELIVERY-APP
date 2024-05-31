import express from 'express';import cors from 'cors';
import {connectDB} from './Config/Db.js';
import foodRouter from './Routes/foodRoute.js';

// App config

const app = express();
const port = 4000;

// middleware

app.use(express.json());
app.use(cors());

// db connection
connectDB();

// Api End point
app.use('/api/food', foodRouter);
app.use('/images', express.static('Uploads'));

app.get('/', (req, res) => {
  res.send('API working');
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
