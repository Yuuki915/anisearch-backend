const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema({
  name: String,
  genre: String,
  authorId: String,
});

module.exports = mongoose.model("Anime", animeSchema);
