"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const routes = require('./routes/TodoRoutes');
const cors = require("cors");
var bodyParser = require('body-parser');
// configure the app to use bodyParser()
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);
mongoose_1.default
    .connect("mongodb://localhost:27017/")
    .then(() => console.log("Connect To MongoDBs"))
    .catch((err) => console.log(err));
app.listen(5000, () => console.log("Server listening on Port: 5000"));
