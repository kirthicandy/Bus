const express = require("express");
const mongoose = require("mongoose");
const programRouter = require("./router/route");
const busInfoRouter = require("./router/businfo")
const busRoute = require("./router/busroutes")
const reverseroute = require("./router/reverseroutes")

const url = "mongodb://127.0.0.1/user";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected.......");
});
const cors = require('cors')
app.use(cors())

app.use(express.json());

app.use("/info", programRouter);
app.use("/businfo", busInfoRouter);
app.use("/busroute", busRoute);
app.use("/reverseroutes", reverseroute);


app.listen(2112, () => {
  console.log("Started the server");
});
