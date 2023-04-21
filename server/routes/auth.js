const express = require('express');
const User = require('../Models/User')

const router = express.Router();

router.get('/login', (req,res)  =>{
    res.send('login')
})

module.exports = router