const express = require("express");
const dotenv = require("dotenv");
const { voterAuthRoutes } = require("./routes/voter/auth");

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World!!");
});

const port = process.env.PORT || 3000;

app.use("/api/voter/auth", voterAuthRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});

module.exports = { app };