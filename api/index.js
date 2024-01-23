import express from 'express'
const app = express();
const PORT = process.env.PORT || 4000;
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/userRoute.js'
import authRoute from './routes/auth.js'

dotenv.config();
// mongoose.connect(process.env.MONGODB_URI)
mongoose.connect('mongodb+srv://sanjoy10062000:VtYlizOAn1Z1sA7S@blogapp.8o8saox.mongodb.net/react-blog')
    .then(() => {
        console.log("Mongoose Atlas Connected");
    }).catch((error) => {
        console.log('Atlas Error: ' + error);
    })

app.use(express.json());
app.use('/users', userRouter);
app.use('/auth', authRoute);
app.use((error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

