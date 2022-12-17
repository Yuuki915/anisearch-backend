const router = require("express").Router();
// const Favorite = require("../models/Favorite");

const {
  getFavorite,
  postFavorite,
  deleteFavorite,
} = require("../controllers/favoriteController");

router.get("/", getFavorite);
router.post("/", postFavorite);
router.delete("/:id", deleteFavorite);

module.exports = router;
