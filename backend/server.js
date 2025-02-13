require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

require("./models/User");
require("./models/Task");

const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

const taskRoutes = require("./routes/taskRoutes");
app.use("/tasks", taskRoutes);
