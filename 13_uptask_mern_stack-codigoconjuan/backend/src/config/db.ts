import mongoose from "mongoose";
import colors from "colors";


 async function connectDB (){
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
}
export { connectDB};