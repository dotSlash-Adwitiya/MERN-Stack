const fs = require("fs");
const express = require("express");
const app = express();

app.use(express.json());

const user = [
  {
    name: "Jhon Doe",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
  {
    name: "Juan Philips",
    kidneys: [
      {
        healthy: true,
      },
    ],
  },
  {
    name: "Hail Marry",
    kidneys: [
      {
        healthy: true,
      },
    ],
  },
  {
    name: "Adwitiya Mourya",
    kidneys: [
      {
        healthy: true,
      },
    ],
  },
  {
    name: "Neil Robinson",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/getKidneyHealth", function (req, res) {
  const jhonKidneys = user[0].kidneys;
  const noOfKidneys = jhonKidneys.length;
  
  let noOfHealthyKidneys = 0;
  for (let i = 0; i < jhonKidneys.length; i++) {
    if (jhonKidneys[i].healthy) {
      noOfHealthyKidneys = noOfHealthyKidneys + 1;
    }
  }
  const noOfUnHealthyKidneys = noOfKidneys - noOfHealthyKidneys;
  res.json({ noOfKidneys, noOfHealthyKidneys, noOfUnHealthyKidneys });
  console.log(jhonKidneys);
});

app.listen(3000);
