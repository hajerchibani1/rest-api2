const mongoose = require("mongoose");

const schema = mongoose.Schema;

const personSchema = schema({
  name: String,

  age: Number,

  favoriteFoods: [Array],
});
const personne = mongoose.model("person", personSchema);
module.exports = personne;
