const { pool } = require('../config/db');


const userModel = {
    async findByEmail(email) {
        const result = await pool.query(
            `SELECT * FROM users WHERE email = $1`,
            [email]
        );
        return result.rows[0] || null;
    },
    async createUser({ username, email, hashPassword }) {
        const result = await pool.query(
            `INSERT INTO users (username,email,password) VALUES ($1,$2,$3) RETURNING *`,
            [username, email, hashPassword]
        )
        return result.rows[0];
    }
}


module.exports = userModel