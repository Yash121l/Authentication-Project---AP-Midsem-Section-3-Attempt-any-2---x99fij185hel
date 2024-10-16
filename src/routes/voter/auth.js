const express = require("express");
const { signup } = require("../../controllers/voter/auth");
const voterAuthRoutes = express.Router();

voterAuthRoutes.post("/signup", signup);
module.exports = { voterAuthRoutes };