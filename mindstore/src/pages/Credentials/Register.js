import React, { useRef, useState } from 'react'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { Link } from "react-router-dom"
import "./credentials.css";

function Register() {

  const firstName = useRef("")
  const lastName = useRef("")
  const email = useRef("")
  const password = useRef("")
  const address = useRef("")
  const dateOfBirth = useRef("")
  const image = useRef("")
  const [message, setMessage] = useState("")
  const [isDateText, setIsDateText] = useState(true)


  async function handleSubmit(event) {

    event.preventDefault()

    const body = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      password: password.current.value,
      address: address.current.value,
      dateOfBirth: dateOfBirth.current.value,
      image: image.current.value,

    }


    const request = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }

    try {
      const response = await fetch("/api/v1/users", request);
      if (response.status === 200) {
        setMessage("Register successful!")
      } else {
        setMessage("Register failed!")
      }
    } catch (err) {
      console.log(err)
    }
  }

  function handleDate() {
    setIsDateText(false);
  }

  return (
    <>
      <Header />
      <div className="credentials-container">
        <div className="credentials-subcontainer">
          <p className="credentials-title">Register</p>
          <form onSubmit={handleSubmit} className='credentials-form' >
            <label htmlFor='firstName' >
              <input className='table' type="text" ref={firstName} placeholder="First Name" required />
            </label>
            <label htmlFor='lastName' >
              <input className='table' type="text" ref={lastName} placeholder="Last Name" required />
            </label>
            <label htmlFor='email' >
              <input className='table' type="text" ref={email} placeholder="Email" required />
            </label>
            <label htmlFor='password'>
              <input className='table' type="password" ref={password} placeholder="Password" required />
            </label>
            <label htmlFor='address'>
              <input className='table' type="text" ref={address} placeholder="Address" required />
            </label>
            <label htmlFor='dateOfBirth'>
              <input className='table' type={isDateText ? "text" : "date"} onClick={handleDate} ref={dateOfBirth} placeholder="Date of Birth" required />
            </label>
            <label htmlFor='image'>
              <input className='table' type="text" ref={image} placeholder="Profile Picture" required />
              {/* <input type="url" name="url" className='table' placeholder="image" pattern="https://.*" size="30" ref={image}></input> */}
            </label>
            <button className='credentials-button' type='submit'>Register</button>
          </form>
          <p className={message === "Register successful!" ? "success-message" : "error-message"}> {message}</p>
          <p className="credentials-message">
            Already have an account?
            <Link to="/Login" className="credentials-redirect"> Login here</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}


export default Register