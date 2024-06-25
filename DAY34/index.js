/*
 * Learning: Middlewares and Global Caches
 */
const express = require("express");

const app = express();

app.use(express.json());

app.post("/handle-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  console.log("1");
  const kidneyLength = kidneys.length;
  res.send("Your kidney length is: " + kidneyLength);
});

// * Global Cache
app.use((err, req, res, next) => {
  // errCnt++;
  res.status(500).send("An internal server error occured");
});

app.listen(3000);
