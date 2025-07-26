import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import foodRouter from './routes/foodRoute.js';

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

app.get('/', (req, res)=>{
    res.send("API is Working !")
})

app.listen(port, ()=>{
    console.log(`Server Started on http://localhost:${port}`);
})

//mongodb+srv://codewithaayu:codewithaayu@fooddelivery.khmagic.mongodb.net/?retryWrites=true&w=majority&appName=FoodDelivery