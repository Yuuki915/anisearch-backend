const mongoose = require("mongoose");

const AnimeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String },
    // img: { type: String },
    year: { type: Number },
    // duration: { type: String },
    // genre: { type: String },
    // isSeries: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Anime", AnimeSchema);
