const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB,
    port: 5432
})

const connectDB = async () => {
    try {
        const client = await pool.connect();
        console.log('Server connected successfully');
        client.release();
    } catch (e) {
        console.error('Error: ', e.message);
        process.exit(1)
    }
}



module.exports = { pool, connectDB };