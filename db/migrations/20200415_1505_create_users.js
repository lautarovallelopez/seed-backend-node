exports.up = function(knex) {
    return knex.schema
    .createTable('user', function (table) {
        table.string('id');
        table.string('first_name');
        table.string('last_name');
        table.string('email');
        table.string('gender');
        table.string('city');
        table.boolean('deleted');
        table.timestamp('createdAt');
        table.timestamp('updatedAt');
        table.timestamp('deletedAt');
        table.integer('__v');
    });
    
};

exports.down = function(knex) {
return knex.schema
    .dropTable("user");
};