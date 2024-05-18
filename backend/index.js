import express from "express";
import dotenv from "dotenv";
import  connectDB  from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import messageRoutes from './routes/messageRoutes.js'
import cookieParser from "cookie-parser";


dotenv.config({});

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json())
app.use(cookieParser())

app.use('/api/v1/user',userRoutes)
app.use('/api/v1/message',messageRoutes)



app.listen(PORT, () => {
  connectDB()
  console.log(`server lising at port: ${PORT}`);
});
