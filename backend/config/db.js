import mongoose from 'mongoose';

const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://codewithaayu:codewithaayu@fooddelivery.khmagic.mongodb.net/?retryWrites=true&w=majority&appName=FoodDelivery").then(()=>console.log("DB Connected"));

}
export default connectDB;