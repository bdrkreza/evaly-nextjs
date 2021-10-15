const User = require("../Models/User");
const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({
    username,
    email,
    password: CryptoJS.AES.encrypt(
      password,
      process.env.PASS_SECURITY
    ).toString(),
  });

  try {
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
    console.log(saveUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    !user && res.status(401).json("Wrong credentials");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SECURITY
    );

    const Password = hashedPassword.toString(CryptoJS.enc.Utf8);
    Password !== req.body.password &&
      res.status(401).json("Wrong Credentials!");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
module.exports = router;
