import React from 'react'
import { useSelector } from 'react-redux'
import { Link ,useLocation,useNavigate} from 'react-router-dom'
// import { adminMenu, userMenu } from '../Data/data'
import {message} from 'antd'
import { Avatar, Badge, Space } from 'antd';

import '../styles/LayoutStyles.css'

const Layout = ({children}) => {
    const {user} =useSelector(state=> state.user)
    const location=useLocation()
    const navigate= useNavigate();

    // logout function

    const handleLogout=()=>{
        localStorage.clear();
        message.success("Logout Successfully")
        navigate('/login');
    }

    // doctor menu 

    const doctorMenu = [
        {
            name:'Home',
            path:'/',
            icon:'fa-solid fa-house',
        },
        {
            name:'Appointments',
            path:'/doctor-appointments',
            icon:'fa-solid fa-list'
        },
        {
            name:'Profile',
            path:`/doctor/profile/${user?._id}`,
            icon:'fa-solid fa-user',
        },
       
    ];
    // doctor menu

     const userMenu = [
        {
            name:'Home',
            path:'/',
            icon:'fa-solid fa-house',
        },
        {
            name:'Appointments',
            path:'/appointments',
            icon:'fa-solid fa-list'
        },
        {
            name:'Apply Doctor',
            path:'/apply-doctor',
            icon: 'fa-solid fa-user-doctor',
        },
        {
            name:'Profile',
            path:`/profile/${user?._id}`,
            icon:'fa-solid fa-user',
        },
       
    ]
    // admin menu
    
     const adminMenu = [
        {
            name:'Home',
            path:'/',
            icon:'fa-solid fa-house',
        },
        {
            name:'Doctors',
            path:'/admin/doctors',
            icon: 'fa-solid fa-user-doctor',
        },{
            name:'Users',
            path:'/admin/users',
            icon:'fa-solid fa-user',
        },
        {
            name:'Profile',
            path:`/profile/${user?._id}`,
            icon:'fa-solid fa-user',
        },
    ]


    //  render menu list
    const SidebarMenu =user?.isAdmin ? adminMenu : user?.isDoctor ? doctorMenu:userMenu ;
    // const SidebarMenu =user?.isAdmin?adminMenu :userMenu;
  return (
    <>  
    <div className='main'>
        <div className='layout'>
            <div className='sidebar'>
                <div className='logo'>
                    <h6>Doctor Appointment System</h6>
                    <hr></hr>
                </div>
                <div className='menu'>
                    {SidebarMenu.map(menu=>{
                        const isActive= location.pathname ===  menu.path
                        return(
                            <>
                            <div className ={`menu-item ${isActive && 'active'}`}>
                                <i className={menu.icon}></i>
                                <Link to={menu.path}>{menu.name}</Link>
                            </div>
                            </>
                        )
                    })};
                       <div className ={`menu-item`} onClick={handleLogout}>
                                <i className='fa-solid fa-right-from-bracket'></i>
                                <Link to='/login'>Logout</Link>
                    </div>

                </div>
            </div>
            <div className='content'>
                <div className='header'>
                    <div className='header-content'>
                    <Badge count={user && user.notification.length} onClick={()=> {navigate('/notification')}}>
                    <i class="fa-solid fa-bell" style={{cursor:'pointer'}}></i>
                    </Badge>
                       
                        {user?.isDoctor && <Link to = {`/doctor/profile/${user?._id}`}>{user?.name}</Link>}
                        {!user?.isDoctor && <Link to = {`/profile/${user?._id}`}>{user?.name}</Link>}
                    </div>
                </div>
                <div className='body'>{children}</div>
            </div>

        </div>

    </div>
    </>
  )
}

export default Layout