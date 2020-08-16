const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();

router.post('/adminCheck',adminController.postAdminCheck);
router.post('/admin',adminController.postAdmin);

module.exports = router;