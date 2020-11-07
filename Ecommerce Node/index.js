require('dotenv').config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB CONNECTED");
})


const port = 8000;

//middleware
app.use(bodyParser.json());
app.use(cookieParser());



// base routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);




app.listen(port, () => {
    console.log(`---------------App is running ${ port }-----------------`);
});