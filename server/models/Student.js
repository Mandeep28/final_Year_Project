const mongoose = require("mongoose");
const validator = require("validator");

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Value must be requiredd"],
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      unique: true,
      requiredd: [true, "Please provide email"],
      validate: {
        validator: validator.isEmail,
        message: "Please provide valid email",
      },
    },
    rollNo: {
      type: Number,
      required: [true, "Value must be required"],
    },

    semester: {
      type: Number,
      required: [true, "Value must be required"],
    },
    departmentName: {
      type: String,
      required: [true, "Value must be required"],
      maxlength: 70,
    },

    course: {
      type: String,
      required: [true, "Value must be required"],
      minlength: 3,
      maxlength: 60,
    },
    degreeType: {
      type: String,
      enum: ["ug_3", "ug_4", "pg_2", "pg_3"],
      default: "ug_3",
    },

    image: {
      type: String,
      default:
        "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
    },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      requiredd: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("student", StudentSchema);
