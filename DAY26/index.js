const fs = require("fs");
const express = require("express");
const app = express();

app.use(express.json());

const users = [
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
  const kidneyHealthReport = [];

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const noOfKidneys = user.kidneys.length;
    let noOfHealthyKidneys = 0;

    for (let j = 0; j < user.kidneys.length; j++) {
      if (user.kidneys[j].healthy) {
        noOfHealthyKidneys++;
      }
    }

    const noOfUnHealthyKidneys = noOfKidneys - noOfHealthyKidneys;

    kidneyHealthReport.push({
      name: user.name,
      noOfKidneys,
      noOfHealthyKidneys,
      noOfUnHealthyKidneys,
    });
  }

  res.json(kidneyHealthReport);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
