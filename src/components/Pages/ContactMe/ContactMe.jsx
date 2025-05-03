import React, { useState } from 'react'
import './ContactMe.css'
import emailjs from '@emailjs/browser'

const ContactMe = () => {

  const [Loader, setLoader] = useState(false)

  const [user, setUser] = useState({
    name: '',
    email: '',
    number: '',
    msg: ''
  })

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    console.log(user)

    const serviceId = 'service_547ylyx';
    const templateId = 'template_zhuddxr';
    const publicKey = 'aoWeE5nHVSHLBSw3W';

    emailjs.send(serviceId, templateId,{
      name: user.name,
      email: user.email,
      number: user.number,
      msg: user.msg
    }, publicKey)
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully! 🎉");
        setUser({
          name: '',
          email: '',
          number: '',
          msg: ''
        })
      })
      .catch((error) => {
        console.log(error.text)
        alert('Failed to send message. 😔 Please try again.');
      })
      .finally(() => {
        setLoader(false);
      })
  }

  
  return (
    <>
    <div className="heading">
        <h2><p><b><i>Lets Connect</i></b></p></h2>
        <div className='moto'>
            <p>Collaboration starts with a hello 👋</p>
          </div>
          <div className="form-wrapper">
          <div className="form-container">
            <div className="form">
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name<b className='text-red-900'>*</b></label>
                <input className='inp' type="text" name="name" id="name" placeholder='Enter your name' onChange={(e)=>handleChange(e)} required value={user.name}/>
                <label htmlFor="email">Email<b className='text-red-900'>*</b></label>
                <input className='inp' type="email" name="email" id="email" placeholder='Enter your email' onChange={(e)=>handleChange(e)} required value={user.email}/>
                <label htmlFor="number">Phone</label>
                <input className='inp' type="text" name="number" id="number" placeholder='Enter your number' onChange={(e)=>handleChange(e)} value={user.number}/>
                <label htmlFor="msg">Leave your message here...</label>
                <textarea className='msg-text' name="msg" id="msg" cols="30" rows="10" placeholder='Leave a message here...' onChange={(e)=>handleChange(e)} value={user.msg}></textarea>
                <button className='btn' type="submit" disabled={Loader} >
                {Loader ? <span className='submit-text'>
                  <span className='spinner'>
                    <div className="ring"></div>
                    <div className="ring"></div>
                    <div className="ring"></div>
                  </span> 
                  <div className="submit-text">Submitting...</div>
                  </span>
                  : 'Submit'}
                </button>
              </form>
            </div>
            <div className="image">
                <div className="img-quote text-6xl font-semibold">
                Let’s turn visions into reality. Reach out — I’m listening.
                </div>
            </div>
          </div>
          </div>
    </div>
    </>
  )
}

export default ContactMe
