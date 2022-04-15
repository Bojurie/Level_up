import axios from "axios";
import React, {useState} from 'react'
import './Login.css'

 const Register = () => {
  const [fullname, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/register", {
        fullname,
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className='form-container'>
      <h1>Account <span className='text-primary'>Register</span></h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name' style={{textAlign:'center'}}>Full Name</label>
          <input type='text' onChange={(e) =>setFullName(e.target.value)}/>
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input type='email' onChange={(e) =>setEmail(e.target.value)}/>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input type='passowrd' onChange={(e) =>setPassword(e.target.value)}/>
        </div>
        <div className='form-group'>
          <label htmlFor='username'>User Nmae</label>
          <input type='username'   onChange={(e) =>setUsername(e.target.value)}/>
        </div>
       <p></p><button type='submit' value='Register' className='btn btn-primary btn-block'>Submit</button>
      </form>
       {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  )
}
export default Register;