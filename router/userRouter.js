const express = require("express");

const router = express.Router();

router.post('/register', (req, res, next)=>{
    //find User
    //If user exist
    //Return response that says user exists try logging in
    //else
    //encrypt the password
    //set the password with the encrypted password
    //save the user to the database
});

router.post("/login",(req, res)=>{

})

module.exports = router;
