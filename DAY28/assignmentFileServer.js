const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const filesDir = path.join(__dirname, "files"); // * Extract Path to the directory containing files

// * Route to get a list of files (GET /files)
app.get("/files", (req, res) => {
  fs.readdir(filesDir, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
    res.json(files);
  });
});

// * Route to get the content of a specific file (GET /file/:filename)
app.get("/file/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(filesDir, filename);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        return res.status(404).send("File not found");
      }
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
    res.send(data);
  });
});

// * Handle any other routes with a 404 Not Found response
app.use((req, res) => {
  res.status(404).send("Not Found");
});

module.exports = app;
