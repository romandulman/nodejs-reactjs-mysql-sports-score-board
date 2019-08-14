const express = require('express');
const router = express.Router();
const apiCtl = require('../controllers/apiCtl');

router.get('/football', apiCtl.getAllfoootball);
router.get('/basketball', apiCtl.getAllbasketball);
router.post('/addcomment', apiCtl.addNewComment);
module.exports = router;
