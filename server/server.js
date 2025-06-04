import express from 'express';
import mongoose from 'mongoose';

const app = express();

const PORT = 3000;

app.use(express.json());

//Routes

app.use('/health',(req,res) => res.status(200).json({message:'server is running'}));
app.listen(PORT,() => {
    console.log(`server is running on http://localhost:${PORT}`);
});