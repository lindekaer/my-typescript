"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Knex = require("knex");
exports.setupKnex = () => {
    const knexConfig = require('../../knexfile');
    return Knex(knexConfig);
};
if (process.env.NODE_ENV === 'development') {
    require('dotenv').load();
}
const path = require('path');
const CONN_STRING = process.env.NODE_ENV === 'testing'
    ? process.env.DATABASE_URL_TESTING ||
        'postgresql://localhost:5432/meal_planner_testing'
    : process.env.DATABASE_URL || 'postgresql://localhost:5432/meal_planner';
module.exports = {
    client: 'postgresql',
    connection: CONN_STRING,
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        directory: path.join(__dirname, '/migrations/'),
        tableName: 'knex_migrations',
        stub: path.join(__dirname, '/migrations/stub.js')
    },
    useNullAsDefault: true,
    debug: (process.env.DEBUG || '').includes('knex')
};
const knex = Knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: '',
        password: '',
        database: 'my_typescript'
    }
});
//# sourceMappingURL=database.js.map