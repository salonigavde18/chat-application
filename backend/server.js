import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js"
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";

const app = express();
app.use(cookieParser());
app.use(express.json());
dotenv.config();


const PORT = process.env.PORT || 5001;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes)

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Serving started @PORT: ${PORT}`);
})