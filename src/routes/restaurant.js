const express = require('express');
const router = express.Router();
const Restaurant = require('../db/schemas/restaurant')

router.get('/', async(req, res) => {
    const data = await Restaurant.find();
    res.json(data);
});

router.post('/', async (req, res) =>{
    const newRestaurant = new Restaurant (req.body);
    await newRestaurant.save();
    res.json({ status: "Resaturant Created Successfully"});
});

module.exports = router;
n