const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Tanmay5147", // Replace if your password changes
  database: "portfolio_db",
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL Connection Failed:", err.message);
    return;
  }

  console.log("✅ MySQL Connected Successfully");
});

module.exports = db;