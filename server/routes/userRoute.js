'use strict';

const { Router } = require('express');
const router = Router();
const { getUserProfile, editUserProfile } = require('../controllers/userCtrl.js');
/////////////////////////////////////////

router.get('/api/user', getUserProfile);
router.post('/api/user', editUserProfile);

/////////////////////////////////////////
module.exports = router;
