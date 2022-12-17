const Favorite = require("../models/Favorite");

// get
const getFavorite = async (req, res) => {
  const favorites = await Favorite.find({});
  res.status(200).json(favorites);
};

// post
const postFavorite = async (req, res) => {
  const newFav = new Favorite(req.body);

  try {
    const savedFav = await newFav.save();
    res.status(200).json(savedFav);
  } catch (err) {
    res.status(500).json(err);
  }
};

// delete
const deleteFavorite = async (req, res) => {
  const { id } = req.params;
  const favorite = await Favorite.findOneAndDelete({ id: id });
  try {
    res.status(200).json(favorite);
  } catch (error) {
    res.status(404).json({ error: "Error" });
  }
};

module.exports = {
  getFavorite,
  postFavorite,
  deleteFavorite,
};
