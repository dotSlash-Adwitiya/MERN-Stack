// * async/await syntax makes our code slightly more readable
// * Acts like a wrapper around the promise class
// * A promise is just a Class that makes callbacks and asyn() slightly more readable
function kiratReadFile() {
  console.log("Inside Fn");
  const p = new Promise(function (resolve) {
    console.log("Inside Promise");
    fs.readFile("a.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
  return p;
}

async function callKiratReadFile() {
  const data = await kiratReadFile();
  console.log(data);
}

callKiratReadFile();
