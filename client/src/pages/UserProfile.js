import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Table,Form,Col,Input,Row ,TimePicker,message} from 'antd'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import moment from 'moment'

const UserProfile = () => {
    // const {user}= useSelector(state=>state.user)
    const [users,setusers]= useState([])
    const params= useParams()

    // updata doctor
    // const navigate =useNavigate()
    // const dispatch = useDispatch()
    const getUserInfo= async ()=> {
        try{
            const res = await axios.post('/api/v1/user/getUserById',{userId: params.id},
            {
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            })
            if(res.data.success){
                setusers(res.data.data)
            }
        }catch(error){
            console.log(error)
        }
    };
    
    useEffect(()=>{
        getUserInfo();
    },[]);
  return (
    <Layout>
        <h5>Welcome ,</h5> <h3>{users.name}</h3><h3> Email : {users.email}</h3>
    
    </Layout>
  )
}

export default UserProfile