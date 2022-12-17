const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  titleEn: {
    type: String,
  },
  title: {
    type: String,
  },
  img: {
    type: String,
  },
  episodes: {
    type: Number,
  },
  isLiked: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Favorite", favoriteSchema);
