import express from 'express';
import mongoose from 'mongoose';

import {studentRouter} from './routes/studentRouter.js';

const urlMongoDB = "mongodb://localhost/grades";
//Conectando ao mongoDB pelo Mongoose

await mongoose.connect(urlMongoDB,
  {useNewUrlParser: true, 
    useUnifiedTopology: true
  }
);



const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(3000,()=> {
  console.log('Rodando na porta 3000')
});