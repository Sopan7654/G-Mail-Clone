import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routes/user.route.js";
import emailRoute from "./routes/email.route.js";

dotenv.config({})

connectDB();
const PORT = 8080;
const app = express();

//Middleware
app.use(express.urlencoded({extend:true}));
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
    'http://localhost:3000',
     'http://localhost:5173',
  ];
  
  app.use(cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // Allow requests with no origin (like mobile apps or curl requests)
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Enable credentials
  }));
//routes

app.use("/api/v1/user", userRoute)
app.use("/api/v1/email", emailRoute)


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})
