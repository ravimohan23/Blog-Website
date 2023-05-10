const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");

//env config
dotenv.config();

//rest objecct
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.get('/',(req,res)=>{
    res.status(200).send({
        "message":"Node server"
    })
})
//port
const PORT =process.env.PORT || 8080



//listen
app.listen(PORT, () => {
  console.log('server running on ${process.env.DEV_MODE} port no ${PORT}'.bgCyan.white);
  ;
});