// const knex = require("../db/knex");

// exports.getAllCats = function(req, res) {
//   knex("cats").then(cats => res.json(cats));
// };

// exports.getOneCat = function(req, res) {
//   knex("cats")
//     .where("id", req.params.id)
//     .then(cats => res.json(cats));
// };

// exports.addOneCat = function(req, res) {
//   knex("cats")
//     .insert(req.body)
//     .return("*")
//     .then(newCat => res.json(newCat));
// };

// exports.updateOneCat = function(req, res) {
//   knex("cats")
//     .update({
//       ...req.body,
//       updated_at: new Date()
//     })
//     .where("id", req.params.id)
//     .returning("*")
//     .then(updatedCat => res.json(updatedCat));
// };

// exports.removeOneCat = function(req, res) {
//   knex("cats")
//     .del()
//     .where("id", req.params.id)
//     .returning("*")
//     .then(newCat => res.json(newCat));
// };
