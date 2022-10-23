import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/userRoutes.js';
dotenv.config();
//connect a database

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected to db");
}).catch((err)=>{
    console.log(err.message);
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan("dev"))

//Routes
app.use("/users/", userRouter);
//Port server runing 
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`server at runing on the port http://localhost:${PORT}`);
    
})
