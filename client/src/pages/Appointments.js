import React, { useState,useEffect } from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import moment from 'moment'
import { Table } from 'antd'
const Appointments = () => {

    const [appointments,setAppointments]= useState([])
    const getAppointments= async()=>{
        try{
            const res= await axios.get('/api/v1/user/user-appointments',{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
            });
            if(res.data.success){
                setAppointments(res.data.data);
            }
        }catch(error){
            console.log(error)
        }
    };
    useEffect(()=>{
        getAppointments()
    },[]);

    const columns=[
        {
            title:'ID',
            dataIndex:'_id'
        },
        {
            title:'Doctor Name',
            dataIndex:'doctorInfo',
            
        },
        {
            title:'Doctor Contact',
            dataIndex:'phone',
        },
        {
            title:'Date & Time',
            dataIndex:'date',
            render:(text,record)=>(
                <span>
                    {moment(record.data).format('DD-MM-YYYY')} &nbsp;
                    {moment (record.data).format("HH:mm")}
                </span>
            ),
        },
        {
            title:'Status',
            dataIndex:'status'
        },
    ];
  return (
   <Layout>
    <h1>Appointment List</h1>
    <Table columns={columns} dataSource={appointments}></Table>
   </Layout>
  )
}

export default Appointments