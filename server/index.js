import 'dotenv/config'
//console.log(process.env)
import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/posts', postRoutes);
app.get('/', (req, res)=>{
    console.log("App is running...");
})

const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`);
    })
}).catch(err=>{
    console.log(err.message);
});