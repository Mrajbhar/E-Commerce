import express from "express";
import colors from "colors";
import dotenv from 'dotenv'
import morgan from "morgan";
import connectdb from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import categoryRoutees from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRouters.js"
import cors from 'cors';
import path from "path";
dotenv.config();

//database configar

connectdb();

const app = express();

//middeleware
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,"./client/build")))


//routes

app.use('/api/v1/auth',authRoutes);

app.use('/api/v1/category',categoryRoutees);

//product routes
app.use('/api/v1/product',productRoutes);


//rest api

app.use(`*`,function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

const PORT = process.env.PORT || 8080;


app.listen(PORT ,() =>{
    console.log(`Server Runnning on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});