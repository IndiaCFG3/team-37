const express = require('express');
const studentRecordController = require('../controllers/studentRecord');
const router = express.Router();

router.get('/studentRecords/:teamId',studentRecordController.getStudentByTeam);
router.post('/studentRecords',studentRecordController.postStudentRecord);

module.exports = router;