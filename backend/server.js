import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import ProductRoutes from './routes/ProductRoutes.js'

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Backend API is running 🚀");
})

app.use("/api/products", ProductRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server ruuning on port ${PORT}`);    
});