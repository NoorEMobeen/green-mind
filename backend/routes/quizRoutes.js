const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');

router.get('/', async (req, res) => {
    // const questions = await Quiz.find();
    // console.log(questions);
    res.json({message:"working"});
});

module.exports = router;
