/* Imports */
import express from 'express';
import mongoose from 'mongoose';
import {config} from 'dotenv';


import {studentRouter} from './routes/studentRouter.js';



//console.log();

//const urlMongoDB = "mongodb://localhost/grades";
const urlMongoDB = "mongodb+srv://"+config().parsed['USERDBMONGO']+":"+config().parsed['PASSWORDBMONGO']+"@cluster0.z4lqf.mongodb.net/grades?authSource=admin&replicaSet=atlas-l0emud-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
//Conectando ao mongoDB pelo Mongoose

//Conexão com o MongoDB
await mongoose.connect(urlMongoDB,
  {useNewUrlParser: true, 
    useUnifiedTopology: true
  }
);



const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(config().parsed['PORT'],()=> {
  console.log('Rodando na porta '+config().parsed['PORT'])
});