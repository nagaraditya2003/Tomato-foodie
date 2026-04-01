import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://89ayush33:987ayush323@cluster0.ltemjs1.mongodb.net/food_delivery').then(()=>console.log("DB Connected"));
}