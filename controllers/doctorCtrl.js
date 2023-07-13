const appointmentModel = require("../models/appointmentModel");
const doctorModel = require("../models/doctorModel");
const userModel = require("../models/userModels");
const { applyDoctorController } = require("./userCtrl");

const getDoctorInfoController =async(req,res)=>{
    try{
        const doctor = await doctorModel.findOne({userId:req.body.userId});
        res.status(200).send({
            success:true,
            message:'Doctor data fetch success',
            data:doctor
        });
        }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:'Error in Fetching doctor details'
        });
    }
}

const updataProfileController = async(req,res)=> {
    try{
        const doctor = await doctorModel.findOneAndUpdate(
            { userId: req.body.userId},req.body
            );
        res.status(201).send({
            success:true,
            message:'Doctor profile Updated',
            data:doctor,
        });
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Doctor Profile updataed Issue',
            error
        })
    }
};
const getDoctorByIdController = async(req,res)=>{
    try{
        const doctor = await doctorModel.findOne({_id:req.body.doctorId})
        res.status(200).send({
            success:true,
            message:' Single Doc info fetch',
            data:doctor
            
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,error,
            message: 'Error in Sigle Doctor'
        })
    }
};
const doctorAppointmentController =async(req, res)=>{
    try{
        const doctor= await doctorModel.findOne({userId: req.body.userId});
        const appointments= await appointmentModel.find({doctorId: doctor._id});
        res.status(200).send({
            success:true,
            message:"Doctor Appointments fetch Successfully",
            data: appointments,
        })
        
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:'Error in Doc Appointments'
        })

    }
};
const updateStatusController =async(req,res)=>{
    try{
        const {appointmentsId,status}= req.body
        const appointments = await appointmentModel.findByIdAndUpdate(appointmentsId,{status});
       
        const user= await userModel.findOne({_id:appointments.userId})
        const notification= user.notification
        notification.push({type:'Status updated',
        message:`A appointment has been updated ${status}`,
        onClickPath:'/doctor-appointments'
})
await user.save();
rs.status(200).send({
    success:true,
    message:'Appointment Status Updated'
})
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error, 
            message:'error in update status'
        })
    }
}

module.exports={getDoctorInfoController,updataProfileController,getDoctorByIdController,doctorAppointmentController,updateStatusController}