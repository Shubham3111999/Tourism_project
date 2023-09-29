const express = require('express')
const router = express.Router()
const place = require("../models/Place.js")

//Rout 1: to fetch places for particular user  "/api/places"
router.get('/',  async (req, res) => {

    try {
        const places = await place.find({});           
        res.json(places);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server side error");
    
      }
  })


module.exports = router;