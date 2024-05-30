const fs = require("fs");

// * UGLY CODE
// function readFn(cb) {
//   console.log("Inside fn");
//   fs.readFile("a.txt", "utf-8", function (err, data) {
//     console.log("Inside fn");
//     cb(data);
//   });
// }

// function onDone(data) {
//   console.log(data);
// }

// readFn(onDone);

// * PRETTY CODE
function kiratReadFile() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}

function onDone(data) {
  console.log(data);
}

kiratReadFile().then(onDone);
