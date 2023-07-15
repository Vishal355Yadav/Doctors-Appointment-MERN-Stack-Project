import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Form,Col,Input,Row ,TimePicker,message} from 'antd'
import Layout from "../../components/Layout"
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { showLoading,highLoading } from '../../redux/features/alertSlice'
import moment from 'moment'

const Profile = () => {
    const {user}= useSelector(state=>state.user)
    const [doctor,setDoctor]= useState(null)
    const params= useParams()

    // updata doctor
    const navigate =useNavigate()
    const dispatch = useDispatch()
    const handleFinish= async(values)=>{
        try{
             dispatch(showLoading())
             const res= await axios.post('/api/v1/doctor/updateProfile',{...values, userId:user._id,
            // timings:[
            //     moment(values.timings[0]).format('HH:mm'),
            //     moment(values.timings[1]).format('HH:mm')
            //    ],
            },{
                 headers:{
                     Authorization:`Bearer ${localStorage.getItem('token')}`
                 },
             })
             dispatch(highLoading())
             if(res.data.success){
                 message.success(res.data.message)
                 navigate('/')
             }else{
                 message.error(res.data.success)
             }
 
        }catch(error){
         dispatch(highLoading())
         console.log(error)
         
         message.error("Something Wend wrong ")
        }
     }

    // doctor update
    const getDoctorInfo= async ()=> {
        try{
            const res = await axios.post('/api/v1/doctor/getDoctorInfo',{userId: params.id},
            {
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            })
            if(res.data.success){
                setDoctor(res.data.data)
            }
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getDoctorInfo();
    },[]);
  return (
   <Layout>
    <h1>Manage profile</h1>
    {doctor && (
         <Form layout='vertical' onFinish={handleFinish} className='m-3' initialValues={{
            ...doctor,
            timings:[
                moment(doctor.timings[0],'HH:mm'),
                moment(doctor.timings[1],'HH:mm')
               ],
         }}>
         <h4>Personal Details</h4>
             <Row gutter={20}> 
                 <Col x5={24} md={24} lg={8}>
                     <Form.Item label='First Name' name='firstName' required rules={[{required:true}]}>
                         <Input type= 'text' placeholder='your first name'/>
                     </Form.Item>
                 </Col>
                 <Col x5={24} md={24} lg={8}>
                     <Form.Item label='Last Name' name='lastName' required rules={[{required:true}]}>
                         <Input type= 'text' placeholder='your last name'/>
                     </Form.Item>
                 </Col>
                 <Col x5={24} md={24} lg={8}>
                     <Form.Item label=' Phone No' name='phone' required rules={[{required:true}]}>
                         <Input type= 'text' placeholder='your contact No'/>
                     </Form.Item>
                 </Col>
                 <Col x5={24} md={24} lg={8}>
                     <Form.Item label='Email' name='email' required rules={[{required:true}]}>
                         <Input type= 'text' placeholder='your email address'/>
                     </Form.Item>
                 </Col>
                 <Col x5={24} md={24} lg={8}>
                     <Form.Item label='website' name='website'>
                         <Input type= 'text' placeholder='your website'/>
                     </Form.Item>
                 </Col>
                 <Col x5={24} md={24} lg={8}>
                     <Form.Item label='Address' name='address' required rules={[{required:true}]}>
                         <Input type= 'text' placeholder='your clinic address'/>
                     </Form.Item>
                 </Col>
             </Row>
 
             <h4>Professional Details</h4>
             <Row gutter={20}> 
                 <Col x5={24} md={24} lg={8}>
                     <Form.Item label='Specialization' name='specialization' required rules={[{required:true}]}>
                         <Input type= 'text' placeholder='your specialization'/>
                     </Form.Item>
                 </Col>
                 <Col x5={24} md={24} lg={8}>
                     <Form.Item label='Experience' name='experience' required rules={[{required:true}]}>
                         <Input type= 'text' placeholder='your experience'/>
                     </Form.Item>
                 </Col>
                 <Col x5={24} md={24} lg={8}>
                     <Form.Item label='Fee Per Consultation' name='feesPerCunsaltation' required rules={[{required:true}]}>
                         <Input type= 'text' placeholder='your consultation fee'/>
                     </Form.Item>
                 </Col>
                 <Col x5={24} md={24} lg={8}>
                    <Form.Item label='Timings' name='timings' required rules={[{required:false}]}>
                        <TimePicker.RangePicker format= "HH:mm"/>
                    </Form.Item>
                </Col>
                 <Col x5={24} md={24} lg={8}></Col>
                 <Col x5={24} md={24} lg={8}><button className='btn btn-primary form-btn'>Update
                 </button></Col>
             </Row>
 
         </Form>
    )}
   </Layout>
  )
}

export default Profile