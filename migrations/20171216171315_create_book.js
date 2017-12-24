exports.up = async (knex, Promise) => {
  // prettier-ignore
  return await knex.schema.createTable('book', (table) => {
    table.uuid('_id').defaultTo(knex.raw('uuid_generate_v1mc()')).primary()
    table.string('title').notNullable()
    table.string('description', 800).notNullable()
    table.integer('pages').notNullable()
    table.json('author').notNullable()
    table.string('isbn').notNullable()
    table.json('languages').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

exports.down = async (knex, Promise) => {
  return await knex.schema.dropTable('book')
}
