const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://shankh:12345@cluster0.hwukatj.mongodb.net/user_appnew"
);

//  *Mongose asks us to tell the SCHEMA STRUCTURE, so it can verify and validate automatically.
const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({ email: username });
  if (existingUser) {
    return res.status(400).send("Username Already Exists!");
  }

  const user = new User({
    name: name,
    email: username,
    password: password,
  });
  user.save();

  res.json({ msg: "User created Successfully!" });
});

app.listen(3000, function () {
  console.log("Server Running at port!");
});
