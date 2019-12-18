const knex = require("../db/knex");

exports.getAllAnimals = function(req, res) {
  knex("animals").then(animals => res.json(animals));
};

exports.getOneAnimal = function(req, res) {
  knex("animals")
    .where("id", req.params.id)
    .then(animals => res.json(animals));
};

exports.addOneAnimal = function(req, res) {
  knex("animals")
    .insert(req.body)
    .return("*")
    .then(newAnimal => res.json(newAnimal));
};

exports.updateOneAnimal = function(req, res) {
  knex("animals")
    .update({
      ...req.body,
      updated_at: new Date()
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedAnimal => res.json(updatedAnimal));
};

exports.removeOneAnimal = function(req, res) {
  knex("animals")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newAnimal => res.json(newAnimal));
};
