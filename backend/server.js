import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'

// aap config
const app = express();
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoits
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter)

app.get('/', (req, res)=>{
    res.send("API is Working !")
})

app.listen(port, ()=>{
    console.log(`Server Started on http://localhost:${port}`);
})

//mongodb+srv://codewithaayu:codewithaayu@fooddelivery.khmagic.mongodb.net/?retryWrites=true&w=majority&appName=FoodDelivery