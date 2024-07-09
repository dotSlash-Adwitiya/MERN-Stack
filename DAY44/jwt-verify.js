const { json } = require("body-parser");
const jwt = require("jsonwebtoken");

const verifiedToken = jwt.verify(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWR3aXRpeWEgTW91cnlhIiwiQWNjb3VudE5vIjoxMjMyMzQ0MjMsImlhdCI6MTcyMDUzMjkyNn0.cRcRhDEAc_UytW4KEgYixFNgoonlEvvHuRN6yX9bi-Q",
  "Secret"
);

console.log(verifiedToken);