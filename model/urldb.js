const mongoose = require("mongoose");
const { Schema } = mongoose;

const URLSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  safe: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("url", URLSchema);
