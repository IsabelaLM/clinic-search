const mongoose = require("mongoose");
const PointSchema = require("./utils/PointSchema");

const ClinicSchema = new mongoose.Schema({
  name: String,
  type: String,
  adress: String,
  plans: [String],
  location: {
    type: PointSchema,
    index: "2dsphere"
  }
});

module.exports = mongoose.model("Clinic", ClinicSchema);
