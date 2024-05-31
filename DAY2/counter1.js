var counter = 0;

function incrementCnter() {
  counter++;
  console.log("Counter increment to : ", counter);
}

setInterval(incrementCnter, 1000);
