const knex = require("../db/knex");

exports.getAllDogs = function(req, res) {
  knex("dogs").then(dogs => res.json(dogs));
};

exports.getOneDog = function(req, res) {
  knex("dogs")
    .where("id", req.params.id)
    .then(dogs => res.json(dogs));
};

exports.addOneDog = function(req, res) {
  knex("dogs")
    .insert(req.body)
    .return("*")
    .then(newDog => res.json(newDog));
};

exports.updateOneDog = function(req, res) {
  knex("dogs")
    .update({
      ...req.body,
      updated_at: new Date()
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedDog => res.json(updatedDog));
};

exports.removeOneDog = function(req, res) {
  knex("dogs")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newDog => res.json(newDog));
};
