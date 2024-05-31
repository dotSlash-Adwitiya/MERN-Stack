const fs = require("fs");

// Read the file asynchronously
fs.readFile(
  "/home/adwitiya/Desktop/0-1 Cohort/DAY2/message.txt",
  "utf-8",
  (err, data) => {
    if (err) {
      console.log("error reading a file", err);
    } else {
      console.log("data read!");
      // Process the data here, after the file has been read
      // dataWithoutSpaces = data.trim();
      data = data + " NEW DATA HERE!!";
      console.log(data);
      fs.writeFile(
        "/home/adwitiya/Desktop/0-1 Cohort/DAY2/message.txt",
        data,
        (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Data Written!");
          }
        }
      );
    }
  }
);
