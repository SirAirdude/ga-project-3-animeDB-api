const Anime = require("../db/models/Anime.js");

module.exports = {
  index: (req, res) => {
    Anime.find({}).then(anime => {
      res.json(anime);
    });
  }
};