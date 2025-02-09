const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRoutes);

sequelize.sync().then(() => console.log("Database connected"));

app.listen(5000, () => console.log("Server running on port 5000"));
