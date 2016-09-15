exports.up = function (knex, Promise) {
  return knex.schema.createTable('profiles', function (table) {
    table.increments('id').primary()
    table.string('url')
    table.string('school')
    table.integer('user_id').references('users.id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('profiles')
}
