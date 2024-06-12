const fs = require("fs");
const express = require("express");
const { request } = require("http");



const app = express();
app.use(express.json());


const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.post("/conversations", (req, res)=> {
  console.log(req.headers);
  console.log(req.body);
  res.send({
    msg:"2 + 2 = 4"
  })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
