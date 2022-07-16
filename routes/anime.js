const router = require("express").Router();
const Anime = require("../models/AnimeModel");

const {
  getAnimes,
  getAnime,
  createAnime,
  deleteAnime,
  updateAnime,
} = require("../controllers/animeController");

router.get("/", getAnimes);

router.get("/:id", getAnime);

router.post("/", createAnime);

router.delete("/:id", deleteAnime);

router.patch("/:id", updateAnime);

module.exports = router;
