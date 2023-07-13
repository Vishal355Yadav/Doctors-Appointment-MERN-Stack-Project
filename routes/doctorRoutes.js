const express = require('express')
const { getDoctorInfoController, updataProfileController, getDoctorByIdController, doctorAppointmentController, updateStatusController } = require('../controllers/doctorCtrl')
const authMiddleware = require('../middlewares/authMiddleware')
const router = express.Router()

router.post('/getDoctorInfo',authMiddleware,getDoctorInfoController)

// updata doctor profile

router.post('/updateProfile',authMiddleware,updataProfileController);

// post get single doctor
router.post('/getDoctorById',authMiddleware,getDoctorByIdController)

// get appointemnets
router.get('/doctor-appointments',authMiddleware,doctorAppointmentController)

// post update status
router.post('/update-status',authMiddleware,updateStatusController)
module.exports= router
