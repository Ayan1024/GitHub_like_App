import mongoose from "mongoose";


export default async function connectMongoDB(){
    try {
        await mongoose.connect(process.env.MONGO_URI,)
        console.log("mongodb connected successfully")
        
    } catch (error) {
        console.log("Error to connect to mongodb", error.message);
    }
}