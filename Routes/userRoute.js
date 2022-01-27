const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const User = require("../model/userModel");

router.post(
  "/register",
  async (req, res) => {
    const { name, email, password, role } = req.body;

    const newUser = new User({ name, email, password, role });

    try {
      newUser.save();
      res.send("User Registered!!!");
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  },

  router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.find({ email, password });
      console.log(user);

      if (user.length > 0) {
        const currentUser = {
          name: user[0].name,
          email: user[0].email,
          isAdmin: user[0].isAdmin,
          _id: user[0]._id,
        };
        res.send(currentUser);
      } else {
        return res.status(400).json({ message: "user login failed" });
      }
    } catch (err) {
      res.status(404).json({ message: err });
    }
  })
);

module.exports = router;
