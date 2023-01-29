const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user");
const cookieParser = require("cookie-parser")
const path = require("path")
const cors = require("cors") //

dotenv.config();

const app = express();

// Connect the build folder to node
app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.set("view engine","ejs");

//app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(cors()); //

app.use(express.urlencoded({ extended: true })); 

app.use(express.static(path.join(__dirname, 'public')));

app.use("/",userRoute);

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("db connected...")
}).catch((err)=>{
    console.log(err)
})
app.listen(process.env.PORT || 5050,()=>{
    console.log("server running...")
})