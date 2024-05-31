const fs = require("fs");

var newData = "This is new data";

// * Below is asynchronous task hence it will be performed later
fs.writeFile("a.txt", newData, (err) => {
  if (err) console.log(err);
  else {
    console.log("New data written!");
  }
});

console.log("After Writing data to a file");
console.log("After Writing data to a file");
console.log("After Writing data to a file");
console.log("After Writing data to a file");
console.log("After Writing data to a file");
