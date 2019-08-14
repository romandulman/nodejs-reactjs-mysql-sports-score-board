const express = require('express');
const router = express.Router();
const apiCtl = require('../controllers/apiCtl');

router.get('/', apiCtl.getAllfoootball);
router.get('/', apiCtl.getAllbasketball);
router.get('/', apiCtl.getAll);

router.get('/',apiCtl.getSingle);

router.post('/', apiCtl.addNew);

router.post('/', apiCtl.editSingle);

router.delete('/', apiCtl.delSingle);

router.put('/',apiCtl.updateSingle);

module.exports = router;
