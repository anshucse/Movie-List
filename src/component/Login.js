import React, {useRef } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Login() {
    const fName  = useRef()
    const fPassword = useRef()

    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            let name = fName.current.value;
            let password = fPassword.current.value

            console.log('name =', name , ", password =", password)
            let users = JSON.parse(localStorage.getItem('contacts')) || []
            
            if(users.length === 0) {
                toast.warning("No users data exists.")
            } else {
                let extUser = users.find((item) => item.name === name)
                console.log('extUser', extUser)
                if(!extUser) {
                    toast.warning("invalid credentials")
                }
                else if(extUser.password === password) { 
                    navigate('/apiPage')
                    toast.success('Login Successful')
                    localStorage.setItem("loginSuccess", true)
                    window.location.reload()
                    
                } else {
                    toast.warning('invalid credentials')
                }
            }

        } catch (err) {
            toast.error(err.message)
        }
    }



  return (
    <div className="row">
    <div className="col-md-6 offset-md-3">
         <div className="card">
            
            <div className="card-body">
          <form onSubmit={submitHandler} autoComplete='off' >
             <div className="form-group mt-2">

                  <label htmlFor="name">Name</label>
                  <input type="text"   name='name' placeholder='name' ref={fName} className='form-control' required />
             </div>

                <div className="form-group mt-2">
                     <label htmlFor="password"> password</label> 
                     <input type="password"  name='password' placeholder='password' ref={fPassword}  className='form-control' required
                     />
                </div>
                <div className="form-group mt-2">
                      <input type="submit" className='btn btn-success' />
                </div>
          </form>
          </div>
            </div>
            </div>
            </div>
  )
}

export default Login
