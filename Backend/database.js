// Backend/database.js
const mysql = require("mysql2");

// Koneksi database MySQL
const db = mysql.createConnection({
  host: "localhost",      // Sesuaikan dengan host MySQL Anda
  user: "root",           // Sesuaikan dengan username MySQL Anda
  password: "",           // Sesuaikan dengan password MySQL Anda
  database: "db_jobflow",   // Nama database Anda
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.log("Connected to MySQL database.");
  }
});

module.exports = db;
