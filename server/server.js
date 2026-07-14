const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Database Connection
require("./config/db");

const projectRoutes = require("./routes/projects");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 Portfolio Backend API is running");
});

// Project Routes
app.use("/api/projects", projectRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});