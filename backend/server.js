const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// env config
dotenv.config();

// mongodb connection
connectDB();

// port 
const PORT = process.env.PORT || 8000;


// rest objects
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.listen(PORT, () => {
    console.log(`server running on ${process.env.DEV_MODE} port no. ${PORT}`.bgCyan.white);
})