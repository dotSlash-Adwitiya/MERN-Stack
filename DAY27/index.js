const fs = require("fs");
const express = require("express");
const app = express();

const users = [
  {
    name: "Jhon",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());
app.get("/", function (req, res) {
  const jhonKidneys = users[0].kidneys;
  const noOfKidneys = jhonKidneys.length;
  let noOfHealthyKidneys = 0;
  for (let i = 0; i < jhonKidneys.length; i++) {
    if (jhonKidneys[i].healthy) {
      noOfHealthyKidneys = noOfHealthyKidneys + 1;
    }
  }
  const noOfUnHealthyKidneys = noOfKidneys - noOfHealthyKidneys;
  console.log(noOfKidneys);
  res.json({
    noOfKidneys,
    noOfHealthyKidneys,
    noOfUnHealthyKidneys,
  });
});

app.post("/", function (req, res) {
  console.log(req.body.isHealthy);
  const isHealthy = req.body.isHealthy;

  // Create a new kidney object with the received data
  const newKidney = { healthy: isHealthy };

  // Spread operator to create a copy of the kidneys array
  const updatedKidneys = [...users[0].kidneys, newKidney];

  // Update the user's kidneys with the new array
  users[0].kidneys = updatedKidneys;

  res.json({ msg: "Done!" });
});

// * RESET ALL Kidneys to HEALTHY
app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

app.delete("/", (req, res) => {
  if (isUnhealthyKidney()) {
    const newKidneys = [];

    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({ healthy: true }); // * Push all healthy kidneys into new arr[]
      }
    }
    users[0].kidneys = newKidneys; // * Copy the new arr into original one
    res.json({ msg: "DONE!" });
  } else {
    res.status(411).json({ msg: "You don't have any unhealthy kidneys!" });
  }
});

function isUnhealthyKidney() {
  let flag = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      flag = true;
    }
  }
  return flag;
}

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
