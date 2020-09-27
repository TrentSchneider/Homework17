const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: new Date().setDate(new Date().getDate())
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
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

WorkoutSchema.virtual("totalDuration").get(function () {
  let total = 0;
  for (let i = 0; i < this.exercises.length; i++) {
    total += +this.exercises[i].duration;
  }
  return total;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
