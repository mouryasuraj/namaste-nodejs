/*

// Diving into the APIs and express Router

1. Alway create express router to manage the api, do not put all the apis in a single file, use express router - https://expressjs.com/en/5x/api.html#router
2. next('router) is used to skip all the middlewares related to that specific path and directly jump to the ending path
3. router.param is used to handle the parameter comming on the url, it will check the url and if the param will present the it will run that middleware, and perform task like get the user from the DB and add to request object. take the below example.

const express = require('express');
const User = require('../models/user');

const router = express.Router();

// Param middleware
router.param('userId', async (req, res, next, id) => {
  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    req.userDoc = user; // attach the user doc to request
    next();
  } catch (err) {
    next(err);
  }
});

// Route using the param
router.get('/:userId', (req, res) => {
  res.json(req.userDoc); // userDoc is loaded by router.param
});

module.exports = router;




Questions:
1. 


*/
