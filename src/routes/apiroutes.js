const express = require("express");
const router = express.Router();

const ownerRoutes = require("./owners");

router.use("/owners", ownerRoutes);

module.exports = router;
