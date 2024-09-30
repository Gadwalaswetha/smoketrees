const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Address = require("../models/Address");

// Endpoint to register a user with an address
router.post("/register", async (req, res) => {
  const { name, address } = req.body;

  try {
    // Create a new user
    const user = await User.create({ name });

    // Create a new address linked to the user
    await Address.create({ address, userId: user.id });

    res
      .status(201)
      .json({ message: "User and address registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error registering user and address" });
  }
});

module.exports = router;
