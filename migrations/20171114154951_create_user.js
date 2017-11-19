exports.up = async (knex, Promise) => {
  // prettier-ignore
  return await knex.schema.createTable('user', (table) => {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v1mc()')).primary()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('password_hash').notNullable()
    table.json('meta').nullable()
    table.timestamp('updated_at').nullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

exports.down = async (knex, Promise) => {
  return await knex.schema.dropTable('users')
}
