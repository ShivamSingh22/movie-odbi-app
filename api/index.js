import express  from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.VITE_MONGO).then(()=>{
    console.log("DB_Connected")
}).catch((e)=>{
    console.log(e);
})

const app=express();

app.listen(3000, ()=>{
    console.log('Server is running on port 3000!!')
    }
);