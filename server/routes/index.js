'use strict';

const { Router } = require('express');
const router = Router();
const root = require('./rootRoute.js');
const user = require('./userRoute.js');
/////////////////////////////////////////

//Routers
router.use(root);
router.use(user);

/////////////////////////////////////////
module.exports = router;
