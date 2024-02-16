import express from 'express';

import mongoose from 'mongoose';
import profileRoutes from './Routes/ProfileRoutes.js';
import cors from 'cors';
import studentRoutes from './Routes/studentRoutes.js';



const app = express();

// parsing request body
app.use(express.json());


app.use(cors());


app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack Tutorial');
});

app.use('/profiles', profileRoutes);
app.use('/students', studentRoutes);

mongoose
    .connect("mongodb+srv://root:root@cluster0.zfsnjpu.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log('App connected to database');
        app.listen(3000, () => {
            console.log(`App is listening to port: 3000`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
