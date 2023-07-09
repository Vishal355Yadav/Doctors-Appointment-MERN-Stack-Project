const mongoose= require('mongoose')

const doctorSchema = new mongoose.Schema({
    userId:{
        type :String,
    },
    firstName:{
        type :String,
        required:[true,'first name is Required']
    },
    lastName:{
        type :String,
        required:[true,'last name is Required']
    },
    phone:{
        type :String,
        required:[true,'phone is Required']
    },
    email:{
        type :String,
        required:[true,'email is Required']
    },
    website:{
        type :String,
    },
    address:{
        type :String,
        required:[true,'address is Required']
    },
    specialization:{
        type :String,
        required:[true,'specialization is Required']
    },
    experience:{
        type :String,
        required:[true,'experience is Required']
    },
    feesPerCunsaltation:{
        type :Number,
        required:[true,'fee is Required']
    },
    status:{
        type:String,
        default:'pending'
    },
    timings:{
        type :Object,
        required:[true,'work timing is Required']
    },
},{timestamps: true})


const doctorModel = mongoose.model('doctors', doctorSchema)
module.exports= doctorModel
