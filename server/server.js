import express from 'express';
import mongoose from 'mongoose';
import contactRoutes from './routes/contactRoutes.js';
import userRoutes from './routes/userRoutes.js';
import projectRoutes from './routes/projectRoutes.js';


// MongoDb connection

mongoose.connect('mongodb+srv://cmaina2:123Ciira@portfoliocluster.m4agpa0.mongodb.net/mern?retryWrites=true&w=majority')
const connection = mongoose.connection;
connection.on('error',console.error.bind(console,'Mongodb connect error'));
connection.once('open',() => {
    console.log('connected to MongoDb')
});
const app = express();

const PORT = 3000;

app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Portfolio Backend API!');
});

//API routes
app.use('/api/project',projectRoutes);
app.use('/api/ user',userRoutes);
app.use('/api/contacts',contactRoutes);

app.listen(PORT,() => {
    console.log(`server is running on http://localhost:${PORT}`);
});