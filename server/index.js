import express from "express";
import bodyParser from "body-parser";
import pkg from 'mongoose';
import cors from "cors";
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv';

const mongoose  = pkg;
const app = express();

// load configuration from .env file
dotenv.config();

// must to be set before API be called
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
// allow all Same origin policy
app.use(cors());

//localhost://5000/posts => postRoutes
app.use('/posts',postRoutes);

// https://www.mongodb.com/cloud/atlas
// const CONNECTION_URL = "mongodb://root:a5701582@localhost:27017/mern?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
   .then(() => app.listen(PORT, () => console.log('Server running on port: ' + PORT)))
   .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify',false);