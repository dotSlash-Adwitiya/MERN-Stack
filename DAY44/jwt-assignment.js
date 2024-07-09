const { json } = require("body-parser");
const jwt = require("jsonwebtoken");

const value = {
  name: "Adwitiya Mourya",
  AccountNo: 123234423,
};

// * Generating a TOKEN using - .sign() method
const token = jwt.sign(value, "Secret");
console.log(token);