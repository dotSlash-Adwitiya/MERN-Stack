const mongoose = require("mongoose");
mongoose.connect("Connection String");

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

const user = new User({
  name: "Adwitiya",
  email: "helloWorld@example.com",
  password: "Pass",
});
user.save();
