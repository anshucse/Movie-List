import React from 'react'
import {toast} from 'react-toastify'
import { addDataHandler } from '../api/Data';

class Register extends React.Component {
     
  state = {
       name: '',
       password: '',
       email: '', 
       number: ''
       
  }
   
     add = (e) => {
               e.preventDefault();
               if(this.state.name === "" || this.state.password === "" || this.state.email === "" || this.state.number === '' ){
                   toast.error('oops must filled the form')
               }
               else if (this.state.name === this.state.name  && this.state.password === this.state.password && this.state.number === this.state.number && this.state.email === this.state.email){
                     toast.success(' Registered successFully ')
                  addDataHandler(this.state);
               }
          };  
           
              
  render(){ 
             return (
    <div className='container'>
      
      <div className="row">
            <div className="col-md-6 offset-md-3">
                 <div className="card">
                    
                    <div className="card-body">
                  <form autoComplete='off' onSubmit=  {this.add}>
                     <div className="form-group mt-2">

                          <label htmlFor="name">Name</label>
                          <input type="text"   name='name' placeholder='name' className='form-control' onChange={ (e) => this.setState({name: e.target.value})} />
                     </div>
                     <div className="form-group mt-2">
                             <label htmlFor="password">password</label> 
                             <input type="password"  name='password' placeholder='password'  className='form-control'
                              onChange={(e) => this.setState({password: e.target.value})} />
                        </div>

                      <div className="form-group mt-2">
                         <label htmlFor="email">Email</label>
                        <input type="email"  name='id' placeholder='email' className='form-control' onChange={(e) => this.setState({email: e.target.value})} />

                        </div> 
                        <div className="form-group mt-2">
                        <label htmlFor="number">Mobile Number</label>
                        <input type="number"  name='id' placeholder='number' className='form-control' onChange={(e) => this.setState({number: e.target.value})} />

                        </div> 
                         <div className="form-group mt-2">
                              <select name="" id="">
                              <option value="" selected>Choose your profession</option>
                                    <option value="">Doctor</option>
                                    <option value="">Engineer</option>
                                    <option value="">Hr</option>   
                              </select>
                         </div>
                        <div className="form-group mt-2">
                              <input type="submit" className='btn btn-success' />
                        </div>
                  </form>
                  <br />
                  {/* <button className="btn btn-outline-danger icon" onClick={this.clear}>Clear</button> */} 
                  </div>
                  </div>
            </div>
        </div>
    </div>
  )
}
}

export default Register
