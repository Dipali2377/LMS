import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";

dotenv.config();

connectDB();
const App = express();

const PORT = process.env.PORT || 3000;

App.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});

// x9uX90NCtBS73SVd

// mongodb+srv://dipalim680:x9uX90NCtBS73SVd@cluster0.konua.mongodb.net/
