const { Pool } = require('pg');


  const pool = new Pool({
    host:'localhost',
    port:5432,
    user:'gargonx',
    password:'password',
    database:'maStore'
  });

 module.exports = pool
