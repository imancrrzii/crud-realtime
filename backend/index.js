import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProductRoute from './routes/ProductRoute.js';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(ProductRoute);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on port ${process.env.APP_PORT}`);
});

