const Pool = require("pg").Pool

const pool = new Pool({
    user : 'postgres',
    host : 'localhost',
    database : 'database-name',
    password: 'password',
    port: '5432'
})

module.exports = pool
