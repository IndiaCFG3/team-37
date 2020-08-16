const express = require('express');
const classObsController = require('../controllers/classObservation');

const router = express.Router();

router.get('/classObs',classObsController.getClassObservations);
router.post('/classObs',classObsController.postClassObservation);

module.exports = router;