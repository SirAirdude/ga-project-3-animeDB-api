const mongoose = require("../../index.js");
const Schema = mongoose.Schema;

const User = new Schema({
  userName: String,
  email: String,
  favorites: [{ type: mongoose.Schema.Types.ObjectID, ref: "Anime" }]
});

module.exports = mongoose.model("User", User);