const express = require('express');
const router = express.Router();
const apiCtl = require('../controllers/apiCtl');

router.get('/football', apiCtl.getAllfoootball);
router.get('/basketball', apiCtl.getAllbasketball);
router.post('/addcomment/:id', apiCtl.addNewComment);
router.get('/comments/:id', apiCtl.getComment);

module.exports = router;
