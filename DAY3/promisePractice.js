console.log("Topline - 1");
function promisifiedTimeout() {
  console.log("Topline - 3");
  return new Promise(function (resolve) {
    console.log("Inside Promise's Callback - 4!");
    setTimeout(function () {
      console.log("Set timeout called - after 5s!");
      resolve("DONE! I am executeeddd!");
    }, 5000);
  });
}

promisifiedTimeout().then(function (value) {
  console.log("Promisified Timeout 6");
  console.log(value);
});
