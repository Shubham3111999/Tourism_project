const express = require('express')
const router = express.Router()
const users = require("../models/Users.js")
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcrypt")



// Create User  Account
router.post('/signUp', [body('name').isLength({ min: 1 }), body('email').isEmail(), body('password').isLength({ min: 5 })], async (req, res) => {

    let errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors
        });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPasswor = bcrypt.hashSync(req.body.password, salt);

    // const correctPassword= bcrypt.compareSync(req.body.password, hashedPasswor);
    // console.log(correctPassword);



    try {
        let user = await users.create({
            name: req.body.name,
            password: hashedPasswor,
            email: req.body.email
        })


        res.status(200).json(user);

    } catch (error) {
        res.status(400).send("email already exist");


    }
})

// login to  User  Account
router.post('/logIn', [ body('email').isEmail(), body('password').isLength({ min: 5 })], async (req, res) => {
    let success = false;
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors
        });
    }
     
    let {email, password}= req.body;

    let user = await users.findOne({ email });

    if (!user) {
        return res.status(400).json({ success, error: "Please entre correct credential" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);

    if (!passwordCompare) {
        return res.status(400).json({ success, error: "Please entre correct credential" });
    }
    

    res.json({ msg: "user is available" });
    console.log(user);

})




module.exports = router;
