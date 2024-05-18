const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const port = 3000
const router = require('./controllers/cars')

app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173' }));

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', ()=>{
    console.log(`Connected to MongoDB database: ${mongoose.connection.name}`);
})

app.use('/cars', router)

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})