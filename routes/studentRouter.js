import express from 'express';
import {studentModel} from  '../models/studentModel.js';


const app = express();

//Create
app.post('/student', async(req,res)=>{
  try{
    const student = new studentModel(req.body);
   
    await student.save();
    res.send(student);
  }catch(error){
    res.status(500).send(error);
  }
});

app.get("/student", async(req,res)=>{
  try{
    const student = await studentModel.find({});
    res.send(student);
  }catch(err){
    res.status(500).send(error);
  }
})

app.patch("/student/:id",async(req,res)=>{
  try {
    const id = req.params.id;
    
     const student = await studentModel.findByIdAndUpdate({_id: id},req.body,{new:true});
     //console.log(student);
     res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
})

app.get("/student/:id",async(req,res)=>{
  try {
    const id = req.params.id;
    
     const student = await studentModel.findById({_id: id},req.body);
    if(!student){
      res.status(404).send("Não encontrado");
    }else{
      res.send(student);
    }
     
     
  } catch (error) {
    res.status(500).send(error);
  }
})


app.delete("/student/:id",async(req,res)=>{
  try {
    const id = req.params.id;
    const student = await studentModel.findByIdAndDelete({_id: id},req.body);
    if(!student ){
      res.status(404).send('Não encontrado');
    }else{
      res.send();
    }
     
  } catch (error) {
    res.status(500).send(error);
  }
})



export {app as studentRouter};