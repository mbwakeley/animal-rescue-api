exports.up = function(knex, Promise) {
  return knex.schema.createTable("dogs", table => {
    table.increments();
    table.string("name").notNullable();
    table.integer("age").notNullable();
    table.string("species").notNullable();
    table.string("breed").notNullable();
    table.string("color").notNullable();
    table.string("gender").notNullable();
    table.boolean("adopted").notNullable();
    table.string("adoptedDate").notNullable();
    table.string("picture").notNullable();
    table.text("about").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("dogs");
};
