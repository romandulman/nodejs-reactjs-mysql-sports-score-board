const express = require("express");
const router = express.Router();
const apiCtl = require("../controllers/api.controller");

router.get("/sport/:type", apiCtl.getAllBySport);
router.post("/addcomment/:id", apiCtl.addNewComment);
router.get("/comments/:id", apiCtl.getComment);

module.exports = router;
