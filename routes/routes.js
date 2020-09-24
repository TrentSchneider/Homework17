const router = require("express").Router();
const Workouts = require("../models/workoutModel");
const path = require("path");

// home page
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
// exercise page
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
// stats page
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});
router
  .route("/api/workouts")
  //   get last workout
  .get((req, res) => {
    Workouts.findOne({})
      .sort({ day: -1 })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  })
  //   create workout
  .post(({ body }, res) => {
    Workouts.create(body)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
//   get workouts in range
router.get("/api/workouts/range", (req, res) => {});
// add exercise
router.post("/api/workouts/:id", (req, res) => {
  Workouts.findOne({
    _id: req.params.id
  })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
