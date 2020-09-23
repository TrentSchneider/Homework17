const express = require("express");
const router = express.Router();

// home page
router.get("/", (req, res) => {});
// exercise page
router.get("/exercise", (req, res) => {});
// stats page
router.get("/stats", (req, res) => {});
router
  .route("/api/workout")
  //   get last workout
  .get((req, res) => {})
  //   create workout
  .post((req, res) => {});
//   get workouts in range
router.get("/api/workouts/range", (req, res) => {});
// add exercise
router.post("/api/workouts/:id", (req, res) => {});

module.exports = router;
