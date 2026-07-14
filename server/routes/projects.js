const express = require("express");
const router = express.Router();
const db = require("../config/db");

// GET all projects
router.get("/", (req, res) => {
  const sql = "SELECT * FROM projects";

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }

    res.json({
      success: true,
      count: results.length,
      projects: results,
    });
  });
});

module.exports = router;