const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const bcrypt = require("bcryptjs")
const jwt =  require("jsonwebtoken")
const jwtSecret = "mayankjod"

router.post("/creatuser", async (req, res) => {

  const salt = await bcrypt.genSalt (10)
  let secpassword = await bcrypt.hash(req.body.password, salt)
  try {
    await User.create({
      name: req.body.name,
      password:  secpassword,
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
    const passwordcompare = await bcrypt.compare(req.body.password , userdata.password)
    if(!passwordcompare){
        return res.status(400).json({message : "login with correct password"})
    }
     const data = {
      user:{
        id:userdata.id
      }
     }
    const authToken = jwt.sign(data ,jwtSecret)
    return res.json({success: true , authToken: authToken})
   } catch (error) {
    console.log(error);
    res.json({ success: false });

  }
});

module.exports = router;
