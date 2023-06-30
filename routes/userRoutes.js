const express= require('express')
const { loginController,registerController } = require('../controllers/userCtrl');

const router= express.Router();

router.post('./login',loginController);

routes.post('/register',registerController);
module.exports =router;