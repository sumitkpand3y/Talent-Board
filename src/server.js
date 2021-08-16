const express = require("express");
const talent = require("./talent");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();

app.use(express.json());

router.get("/talent/filters", function (_req, res, next) {
  talent.get(
    function (data) {
      res.status(200).json({
        status: 200,
        statusText: "OK",
        message: "All searchs retrieved.",
        data: data,
      });
    },
    function (err) {
      next(err);
    }
  );
});
router.post("/talent", function (req, res, next) {
  talent.create(
    req.body,
    function (_data) {
      res.status(201).json({
        statusCode: 201,
        body: "Requested data created successfully",
      });
    },
    function (err) {
      next(err);
    }
  );
});

app.use("/", router);

const server = app.listen(5000, function () {
  console.log("Node server is running on http://localhost:5000..");
});
