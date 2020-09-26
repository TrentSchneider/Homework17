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
  .post((req, res) => {
    console.log(req.body);
    Workouts.create(req.body)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
//   get workouts in range
router.get("/api/workouts/range", (req, res) => {
  Workouts.find({})
    .sort({ day: 1 })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// add exercise
router.put("/api/workouts/:id", (req, res) => {
  console.log("test");
  Workouts.updateOne(
    {
      _id: req.params.id
    },
    {
      $push: {
        exercises: req.body
      }
    }
  )
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
