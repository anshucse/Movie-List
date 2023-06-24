import React, {useState, useEffect, } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Register from './component/Register'
import Login from './component/Login'
import Menu from './component/Menu'
import ApiPage from './component/ApiPage'
import Info from './component/companyInfo'
import "./App.css"
 


function App() {
  let loginStatus = localStorage.getItem("loginSuccess") || false

  return (
     <Router>
        <Menu/>
        <br />
        <br />
      <ToastContainer autoClose={5000}   position={'top-right'} />
     <Routes>
     <Route  path={`/info`}   element={ <Info/>}      />
         <Route   path={`/Login`}   element={<Login       />}  />
         <Route   path={`/Register`}  element={<Register />}       />
         <Route path={`/apiPage`} element={ loginStatus ? <ApiPage/> : <Navigate to={`/Login`} />}  />

        

     </Routes>

     </Router>
  )
}

export default App

