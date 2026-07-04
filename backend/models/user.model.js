const { pool } = require('../config/db');


const userModel = {
    async findByEmail(email) {
        const result = await pool.query(
            `SELECT * FROM users WHERE email = $1`,
            [email]
        );
        return result.rows[0] || null;
    },
    async create({ email, password, usernname }) {
        const result = await pool.query(
            `INSERT INTO users (email,password,username,created_at) VALUES ($1,$2,$3,NOW()) RETURNING *`,
            [email, password, usernname]
        )
        return result.rows[0];
    }
}


module.exports = userModel