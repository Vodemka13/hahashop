const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: 'Mip12345',
    host: 'localhost',
    port: 5432,
    database: 'hahashop_postgres'
})

module.exports = pool