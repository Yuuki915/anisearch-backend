// const Anime = require("../models/Anime");
// const mongoose = require("mongoose");

// // get all
// const getAnimes = async (req, res) => {
//   const animes = await Anime.find({}).sort({ createAt: -1 });

//   res.status(200).json(animes);
// };

// // get one
// const getAnime = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "No Anime" });
//   }

//   const anime = await Anime.findById(id);

//   if (!anime) {
//     return res.status(404).json({ error: "No Anime" });
//   }
//   res.status(200).json(anime);
// };

// // create
// const createAnime = async (req, res) => {
//   const { title, desc, year } = req.body;

//   try {
//     const anime = await Anime.create({ title, desc, year });
//     res.status(200).json(anime);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // delete
// const deleteAnime = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "No Anime" });
//   }

//   const anime = await Anime.findOneAndDelete({ _id: id });

//   if (!anime) {
//     return res.status(404).json({ error: "No Anime" });
//   }

//   res.status(200).json(anime);
// };

// // update
// const updateAnime = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "No Anime" });
//   }

//   const anime = await Anime.findOneAndUpdate({ _id: id }, { ...req.body });

//   if (!anime) {
//     return res.status(404).json({ error: "No Anime" });
//   }

//   res.status(200).json(anime);
// };

// module.exports = {
//   getAnimes,
//   getAnime,
//   createAnime,
//   deleteAnime,
//   updateAnime,
// };
