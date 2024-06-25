/*
 * Learning: ZOD a library for validation
 * NOTE: Below implementation is a very BASIC Authentication
 * And is a dumb way to ask user to send Username and Passwords in Header.
 */
const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

app.use(express.json());

function validateInputs(obj) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });
  const response = schema.safeParse(obj);
  console.log(response);
}

app.post("/handle-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  console.log("Inside post");
  const response = schema.safeParse(kidneys);
  res.send({
    response,
  });
});

app.post("/login", function (req, res) {
  const response = validateInputs(req.body);
  if (!response.success) {
    res.json({
      msg: "Your inputs are INVALID",
    });
    return;
  }
  console.log("Executed!!" + response);
});

app.listen(3000);
