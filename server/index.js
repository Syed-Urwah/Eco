const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const auth = require('./routes/auth');

const app = express();

//connecting to db
mongoose.connect('mongodb://localhost:27017/ecommerce')

//middleware
app.use(express.json());
app.use(cors())
app.use('/auth', auth);

app.get('/test', (req,res)  =>{
    res.send('heeloo')  
})


app.listen(8081, ()=>{
    console.log('server runing')
})