import express from 'express'
const app = express();
const PORT = process.env.PORT || 4000;


app.get('/', (req, res) => {
    res.send("Hello from Express Server"); 
})


app.listen(PORT, () => {
    console.log("Express Server is Running on port...." + PORT);
})