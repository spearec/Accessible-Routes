const { Client } = require('pg')

const pgclient = new Client({
    user: 'postgres',
    database: 'routes',
    password: 'postgres',
    port: 5432,
    host: 'localhost',
});

pgclient.connect();