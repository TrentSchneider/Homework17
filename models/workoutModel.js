const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date().setDate(new Date().getDate())
  },
  totalDuration: {
    type: Number
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
      distance: {
        type: Number,
        trim: true
      },
      weight: {
        type: Number,
        trim: true
      },
      reps: {
        type: Number,
        trim: true
      },
      sets: {
        type: Number,
        trim: true
      }
    }
  ]
});

WorkoutSchema.virtual("total").set(() => {
  for (let i = 0; i < this.exercises.length; i++) {
    totalDuration += this.exercises[i].duratation;
  }
  return this.totalDuration;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
