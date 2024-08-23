// import mongoose from "mongoose"

// const connectDB= async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log('MongoDB Connected Successfully ...');
//     } catch (error) {
//         console.log(error);
//     }
// }
// export default connectDB;


import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected Successfully ...');
    } catch (error) {
        console.error('Error connecting to MongoDB:');
    }
};

export default connectDB;
