const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes=require('./routes/userRoutes.js');
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");


const app = express();
dotenv.config();

connectDB();
app.use(express.json());
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("api is running");
});

app.use('/api/user',userRoutes);
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log(`server started on port ${PORT}`));
