exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary()
    table.string('artist')
    table.string('version')
    table.string('price')
    table.string('')

  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}
