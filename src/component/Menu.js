import React from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

function Menu() {
    let loginStatus = localStorage.getItem("loginSuccess") || false

    const logout = () => {
        localStorage.removeItem('loginSuccess')
        toast.success('Logout success')
        window.location.href = "/Login"
    }

  return ( 
     <nav className="navbar navbar-expand-md navbar-dark bg-success">
           <div className="container">
                 <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menubar" >
                       <span className="navbar-toggler-icon"></span>
                 </button>
   
                   <div className="collapse navbar-collapse" id='menubar'>
                          {
                             loginStatus ? (
                                <ul className="navbar-nav">
                                     <li className="nav-item text-center">
                                <NavLink  to= {`/`} onClick={logout}  className='nav-link  '>Logout</NavLink>
                                  <li className="nav-item text-center ">
                                  <NavLink to={`/info`}  className='nav-link'>company Info</NavLink>
                                  </li>
                              </li>
                                </ul>
                             ): 
                             (
                                <ul className="navbar-nav">
                              <li className="nav-item text-center">
               <NavLink  to= {`/Login`} className='nav-link'>Login</NavLink>
                              </li>
                              <li className="nav-item text-center ">
                  <NavLink to={`/Register`} className="nav-link"> SignUp</NavLink>
                              </li>
                          </ul>
                             )
                          }

                          

                   </div>
           </div>
     </nav>
  )
}

export default Menu
