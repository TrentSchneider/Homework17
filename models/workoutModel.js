const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    required: true
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Type is required."
      },
      name: {
        type: String,
        trim: true,
        required: "Name is required."
      },
      duration: {
        type: Number,
        trim: true,
        required: "Duration is required."
      },
      weight: {
        type: Number,
        trim: true,
        required: "Weight is required."
      },
      reps: {
        type: Number,
        trim: true,
        required: "Reps is required."
      },
      sets: {
        type: Number,
        trim: true,
        required: "Sets is required."
      }
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
