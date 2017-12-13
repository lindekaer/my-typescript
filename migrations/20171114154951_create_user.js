exports.up = async (knex, Promise) => {
  // prettier-ignore
  return await knex.schema.createTable('user', (table) => {
    table.uuid('_id').defaultTo(knex.raw('uuid_generate_v1mc()')).primary()
    table.string('username').notNullable()
    table.string('password').notNullable()
    table.string('email').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

exports.down = async (knex, Promise) => {
  return await knex.schema.dropTable('user')
}
