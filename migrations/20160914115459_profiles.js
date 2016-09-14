exports.up = function (knex, Promise) {
  return knex.schema.createTable('profiles', function (table) {
    table.increments('user_id').primary()
    table.string('url')
    table.string('school')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('profiles')
}
