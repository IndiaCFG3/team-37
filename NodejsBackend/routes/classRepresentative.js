const express = require('express');
const classRepController = require('../controllers/classRepresentative')

const router = express.Router();

router.get('/classRepresentative/:classRepId',classRepController.getClassRep);
router.post('/classRepresentative', classRepController.postClassRep);
router.get('/classRepresentative',classRepController.getClassReps);

module.exports = router;