const doctorModel = require("../models/doctorModel");
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
}

module.exports={getDoctorInfoController,updataProfileController,getDoctorByIdController}