const express= require('express');
const { loginController,registerController, authController, applyDoctorController
    ,getAllNotificationController,deleteAllNotificationController,
     getAllDoctorsController, bookAppointmentController, bookingAvailabilityController, userAppointmentsController } = require('../controllers/userCtrl');
const authMiddleware = require('../middlewares/authMiddleware');

const router= express.Router();

router.post('/login',loginController);

router.post('/register',registerController);
router.post('/getUserData',authMiddleware,authController);
// apply doctor
router.post('/apply-doctor',authMiddleware,applyDoctorController)

// notification doctor
router.post('/get-all-notification',authMiddleware,getAllNotificationController)

router.post('/delete-all-notification',authMiddleware,deleteAllNotificationController)

// get all doctors
router.get('/getAllDoctors',authMiddleware,getAllDoctorsController)

// book appointment
router.post('/book-appointment',authMiddleware,bookAppointmentController)

// booking availability
router.post('/booking-availability',authMiddleware,bookingAvailabilityController)

// appointment list
router.get('/user-appointments',authMiddleware,userAppointmentsController)

module.exports = router;