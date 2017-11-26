/*
-----------------------------------------------------------------------------------
|
| Imports
|
-----------------------------------------------------------------------------------
*/

const path = require('path')

/*
-----------------------------------------------------------------------------------
|
| Connection configurations
|
-----------------------------------------------------------------------------------
*/

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'my_typescript',
      user: '',
      password: '',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.join(__dirname, '/migrations/'),
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.join(__dirname, '/migrations/'),
      tableName: 'knex_migrations',
    },
  },

  testing: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.join(__dirname, '/migrations/'),
      tableName: 'knex_migrations',
    },
  },
}
