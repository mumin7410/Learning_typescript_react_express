import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";

const app:Express = express();
const routes = require('./routes/TodoRoutes')
const cors = require("cors")
var bodyParser = require('body-parser');

// configure the app to use bodyParser()
app.use(cors({
    origin:'*',
    methods:['GET', 'POST','PUT','DELETE'],
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(routes);

mongoose
    .connect("mongodb://localhost:27017/")
    .then(() => console.log("Connect To MongoDBs"))
    .catch((err) => console.log(err));


app.listen(5000,() => console.log("Server listening on Port: 5000"));