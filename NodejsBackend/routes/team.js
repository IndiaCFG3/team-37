const express = require('express');
const teamController = require('../controllers/team');
const router = express.Router();

router.get('/teams',teamController.getTeam);
router.post('/teams',teamController.postTeam);

module.exports = router;