const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
import * as dotenv from 'dotenv';
import connectDB from './config/db';
import authRoutes from './routes/auth';
import productRoutes from './routes/product';



dotenv.config();
dotenv.config({ path: './.env' });
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
