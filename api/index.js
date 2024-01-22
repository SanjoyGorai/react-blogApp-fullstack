import express from 'express'
const app = express();
const PORT = process.env.PORT || 4000;
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();
// mongoose.connect(process.env.MONGODB_URI)
mongoose.connect('mongodb+srv://sanjoy10062000:VtYlizOAn1Z1sA7S@blogapp.8o8saox.mongodb.net/react-blog')
    .then(() => {
        console.log("Mongoose Atlas Connected");
    }).catch((error) => {
        console.log('Atlas Error: ' + error);
    })


app.get('/', (req, res) => {
    res.send("Hello from Express Server");
})


app.listen(PORT, () => {
    console.log("Express Server is Running on port...." + PORT);
})


app.get('/test', (req, res) => {
    res.json({msg: 'API is Working'});
});