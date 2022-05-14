const express = require("express");
const personne = require("../schema/person");
const userRouter = express.Router();

//get all person
userRouter.get("/get", async function (req, res) {
  const result = await personne.find();
  try {
    res.send(result);
  } catch (error) {}
});
//create person
userRouter.post("/create", async function (req, res) {
  const pers = await new personne({
    name: req.body.name,
    age: req.body.age, //on'a creer une instance selon le schema
    favoriteFoods: req.body.favoriteFoods,
  });
  const result = await pers.save(); //on save dans le data base
  try {
    res.send(result);
  } catch (error) {}
});
//chercher les personnes by "favoritefood"
userRouter.get("/getone", async function (req, res) {
  const result = await personne.findOne({ age: req.body.age });
  try {
    res.send(result);
  } catch (error) {}
});
//chercher personnes by id
userRouter.get("/:id", async function (req, res) {
  const id = req.params.id;
  const result = await personne.findById({ _id: id });
  try {
    res.send(result);
  } catch (error) {}
});
//chercher des personnes Using model.findOneAndUpdate()
userRouter.put("/update", async function (req, res) {
  const result = await personne.findOneAndUpdate(
    { name: req.body.name },
    { age: req.body.age },
    { new: true }
  );
  try {
    res.send(result); //on utilise asynch et await pour attendre le server et ne bloque pas le code//
  } catch (error) {}
});
//chercher des personne  by findByIdAndRemove
userRouter.delete("/delete/:id", async function (req, res) {
  const id = req.params.id;
  const result = await personne.findByIdAndRemove({ _id: id }, { new: true });
  try {
    res.send(result);
  } catch (error) {}
});
//remove  personnes by remove({ name: '..' })
userRouter.delete("/deletename", async function (req, res) {
  const name = req.body.name;
  const result = await personne.remove({ name: name });
  try {
    res.send(result);
  } catch (error) {}
});
module.exports = userRouter;
