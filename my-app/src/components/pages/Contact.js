import React, {useState} from 'react'

 const Contact = () => {
   const [user, setUser] = useState({

    name: '',
    email: '',
    topic: '',
    message: ''
   })

   const {name, email, topic, message} = user;

   const onChange = e => setUser({...user, [e.target.name]: e.target.value});

   const onSubmit = e => {
     e.prventDefault();
      console.log('Register Submit')     
   }
  return (
    <div className='form-container'>
      <h1>Contact <span className='text-primary'>Us</span></h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' value={name} onChange={onChange}/>
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input type='email' name='email' value={email} onChange={onChange}/>
        </div>
        <div className='form-group'>
          <label htmlFor='topic'>Topic</label>
          <input type='topic' name='topic' value={topic} onChange={onChange}/>
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message</label>
          <textarea type='message' name='message' value={message} onChange={onChange}/>
        </div>
       <p></p><button type='submit' value='Register' className='btn btn-primary btn-block'>Submit</button>
      </form>
    </div>
  )
}
export default Contact;