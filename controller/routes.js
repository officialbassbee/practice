const express = require('express');
const Router = express.Router();
const User = require('../model/user')
const mongoose = require('mongoose');

Router.post("/", (req, res) => {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
  
    newUser
      .save()
      .then(() => {
        res.send("Your account was created successfully. You may now login.");
      })
      .catch((err) => console.log(err));
  });
  
//   Router.post("/", async(req, res) => {
//     try {
      
//     const newUser = new User({
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//     })
//     const a1 = await User.create(newUser)
//     res.send(a1)
    
//     } catch (error) {
//       console.log(error)
//       res.send(error)
    
  
  //   newUser
  //     .save()
  //     .then(() => {
  //       res.send("Your account was created successfully. You may now login.");
  //     })
  //     .catch((err) => console.log(err),
  //     res.send(err));
  // });

module.exports = Router;