import express, { urlencoded } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app,server } from "./socket/socket.js";

dotenv.config({});

const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: 'http://localhost:3001', 
  credentials: true, 
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


app.use("/api/v1/user", userRoutes);
app.use("/api/v1/message", messageRoutes);

server.listen(PORT, () => {
  connectDB();
  console.log(`server lising at port: ${PORT}`);
});
