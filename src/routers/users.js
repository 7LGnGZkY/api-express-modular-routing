const data = require('../../data.js')
const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
   res.json({users: data.users})
 })

router.get("/:id", (req, res) => {
   let user = data.users.find((user) => user.id == req.params.id);
   if (!user) {
     res.json("No user with ID!");
   }
   res.json({ user: user });
 });