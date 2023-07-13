const express = require('express')
const { getDoctorInfoController, updataProfileController, getDoctorByIdController } = require('../controllers/doctorCtrl')
const authMiddleware = require('../middlewares/authMiddleware')
const router = express.Router()

router.post('/getDoctorInfo',authMiddleware,getDoctorInfoController)

// updata doctor profile

router.post('/updateProfile',authMiddleware,updataProfileController);

// post get single doctor
router.post('/getDoctorById',authMiddleware,getDoctorByIdController)
module.exports= router
