import express from "express";
import dotenv from 'dotenv';
import router from './routes/imageGenerationRoute.js'
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
app.use('/',router)
app.listen(port,()=>{
    console.log("Hue hue on " , port);
})