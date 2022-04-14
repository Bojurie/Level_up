import React, {useState} from 'react'
import './Login.css'

 const Register = () => {
   const [user, setUser] = useState({

    name: '',
    email: '',
    password: '',
    password2: ''
   })

   const {name, email, password, password2 } = user;

   const onChange = e => setUser({...user, [e.target.name]: e.target.value});

   const onSubmit = e => {
     e.prventDefault();
      console.log('Register Submit')     
   }
  return (
    <div className='form-container'>
      <h1>Account <span className='text-primary'>Register</span></h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name' style={{textAlign:'center'}}>Name</label>
          <input type='text' name='name' value={name} onChange={onChange}/>
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input type='email' name='email' value={email} onChange={onChange}/>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input type='passowrd' name='password' value={password} onChange={onChange}/>
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Confirm Password</label>
          <input type='passowrd2' name='password2' value={password2} onChange={onChange}/>
        </div>
       <p></p><button type='submit' value='Register' className='btn btn-primary btn-block'>Submit</button>
      </form>
    </div>
  )
}
export default Register;