const app = express();

// * DEFINING CUSTOM Middlewares
function userMiddleware(req, res, next) {
  if (username != "Adwitiya" && password != "pass") {
    res.status(403).json({
      msg: "incorrect Inputs",
    });
  } else {
    next(); // * Transfer the control to next middleware!
  }
}

function kidneyMiddleware(req, res, next) {
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).json({
      msg: "incorrect Inputs",
    });
  } else {
    next();
  }
}

app.get(
  "/health-checkup",
  userMiddleware,
  kidneyMiddleware,
  function (req, res) {
    res.send("Your Kidney is Healthy!");
  }
);

// * For heart check we don't need the kidney middleware here!
app.get("/heart-checkup", userMiddleware, function (req, res) {
  res.send("Your HEART is Healthy!");
});

// * Function chaining in a single route :
