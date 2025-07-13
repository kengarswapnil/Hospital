const express  = require('express');
const cors = require('cors');
const connectDB = require('./config/mongdb.js')
const dotenv = require("dotenv");
dotenv.config(); // must be at the very top before anything els
const connectCloudinary = require('./config/cloudnary')



const app = express();
const port = process.env.PORT||4000;
connectDB();
connectCloudinary();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send(`Website is running `);
})


app.listen(port ,()=>{
  console.log("Server runnnig at ",port);
})