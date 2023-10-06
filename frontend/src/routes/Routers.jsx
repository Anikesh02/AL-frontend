import React from 'react'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Doctors from '../pages/Hospitals/Hospitals'
import DoctorDetails from '../pages/Hospitals/HospitalDetails'
import StudentProfile from '../pages/StudentProfile'
// import SidePanel from '../pages/Doctors/SidePanel'
import Appointment from '../pages/Hospitals/Appointment'
import {Routes, Route} from 'react-router-dom'
import Payment from '../pages/Hospitals/Payment'
import PricingCard from '../components/PricingCard'
import Dashboard from '../components/teacherDashboard/Dashboard'
import CreateCourse from '../components/teacherDashboard/CreateCourse'
import CourseDetail from '../components/teacherDashboard/CourseDetail'
import CardApp from '../CardApp'


const Routers = () => {
  return <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/doctors' element={<Doctors/>}></Route>
    <Route path='/doctors/:id' element={<DoctorDetails/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Signup/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/services' element={<Services/>}></Route>
    <Route path='/pricing' element={<PricingCard/>}></Route>
    <Route path='/appointment' element={<Appointment/>}></Route>
    <Route path='/payment' element={<Payment/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
    <Route path='/create-course' element={<CreateCourse/>}></Route>
    <Route path='/studentProfile' element={<StudentProfile/>}></Route>
    <Route path='/cardapp' element={<CardApp/>}></Route>
    
    
  </Routes>
  
}

export default Routers