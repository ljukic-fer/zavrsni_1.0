const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Leonjukic12",
    host: "localhost",
    port: 5433,
    database: "HomeRoamDatabase"
});

module.exports = pool;