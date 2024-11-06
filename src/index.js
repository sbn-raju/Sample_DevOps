const express = require("express");
const dotenv = require("dotenv");
dotenv.config();


const app = express();

const PORT = process.env.PORT || 8567;



app.get("/greet",(req, res)=>{
    res.send("Hello from Collasyn");
});


app.listen(PORT, ()=>{
    console.log(`App is running on the port ${PORT}`);
})