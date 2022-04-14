import React, {useState, useEffect} from 'react'
import './Register.css'

 const Login = () => {
   const [user, setUser] = useState({

    email: '',
    password: '',

   })
    useEffect(() => {
      
      return () => {
        
      };
}, []);
   

   const { email, password } = user;

   const onChange = e => setUser({...user, [e.target.name]: e.target.value});

   const onSubmit = e => {
     e.prventDefault();
      console.log('Logged In')     
   }
  return (
      <div className='login'>
          <div className='form-container'>
            <h1>Account <span className='text-primary'>Login</span></h1>
            <hr />
            <h3>Welcome back to level up.</h3>
            <form onSubmit={onSubmit} className='form-content-container'>
            
              <div className='form-group'>
                <label htmlFor='email'>Email Address</label>
                <input type='email' name='email' placeholder="Email Address" value={email} onChange={onChange}/>
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input type='passowrd' name='password' value={password} onChange={onChange}/>
              </div>
          
              <p><button type='submit' value='Login' className='btn btn-primary btn-block'>Login</button></p> 
            </form>
          </div>
      </div>
  )
}
export default Login;