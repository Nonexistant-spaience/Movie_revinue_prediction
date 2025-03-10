require('dotenv').config();
const mysql = require("mysql");

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "",  // Change if needed
    database: process.env.MYSQL_DATABASE || "movie_db"
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed: " + err.stack);
        return;
    }
    console.log("✅ Connected to MySQL database.");
});

module.exports = db;
