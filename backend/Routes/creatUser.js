const express = require("express");
const router = express.Router();
const User = require("../models/Users");

router.post("/creatuser", async (req, res) => {
  try {
    await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      location: req.body.location,
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: flase });
  }
});

router.post("/loginuser", async (req, res) => {

    let email = req.body.email ;
  try {
    let userdata = await User.findOne({email});
    if(!userdata){ 
        return res.status(400).json({message : "login with correct password"})
    }

    if(!req.body.password === userdata.password){
        return res.status(400).json({message : "login with correct password"})
    }
     
    return res.json({success:true})

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: flase });
  }
});

module.exports = router;
