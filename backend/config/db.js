import mongoose from 'mongoose';

const connectDB = async ()=>{
    // await mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DB Connected"));
    await mongoose.connect("${{ secrets.MONGO_URL }}").then(()=>console.log("DB Connected"));

}
export default connectDB;