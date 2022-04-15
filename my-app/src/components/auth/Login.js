import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

import './Register.css'

 const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
      <div className='login'>
          <div className='form-container'>
            <h1>Account <span className='text-primary'>Login</span></h1>
            <hr />
            <h3>Welcome back to level up.</h3>
            <form onSubmit={handleSubmit} className='form-content-container'>
            
              <div className='form-group'>
                <label >Email Address</label>
                <input type='text'  placeholder="Email Address"  ref={userRef}/>
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input type='passowrd' name='password' ref={passwordRef}/>
              </div>
          
             
            </form>
            <button className="btn btn-primary btn-block">
              <Link className="link" to="/register">
                Register
              </Link>
            </button>
          </div>
      </div>
  )
}
export default Login;