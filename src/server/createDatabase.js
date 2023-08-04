const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    database: 'accessible_routes',
    password: 'postgres',
    port: 5432,
    host: 'localhost',
})

module.exports = { pool };