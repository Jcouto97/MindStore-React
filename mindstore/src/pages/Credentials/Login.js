import React, { useRef, useState, useEffect } from 'react'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { Link, useNavigate } from "react-router-dom"
import "./credentials.css"

/*
fazer um form, que recebe email e password
vou guarda-los em useRef
fazer state para mensagem caso sucedido ou nao
guardar o token em local storage para depois usar nos carrinhos de compras e sign out
fazer pedido fetch post a api para logar com o token no authorization
*/


function Login() {

  const navigate = useNavigate()

  const [message, setMessage] = useState("")
  const email = useRef()
  const password = useRef()

  async function handleSubmit(event) {
    /*    console.log(email.current.value)
       console.log(password.current.value)
    */
    event.preventDefault();

    const request = {
      method: 'POST',
      headers: { "Content.Type": "application/JSON" },
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
      }),
    };

    try {
      const response = await fetch("/login", request)
      // const json = await response.json(); nao é preciso aqui?
      if (response.status === 200) {
        setMessage("Login successful!")
        //este get authorization e id nao estam no json? 
        const givenToken = response.headers.get("Authorization");
        const givenId = response.headers.get("Id");

        //atribuir a local storage, dava com use context
        localStorage.setItem("token", givenToken)
        localStorage.setItem("userId", givenId)

      } else {
        setMessage("Login failed!")
      }
    } catch (err) {
      console.log(err)
    }
  }

  //set timeout antes de navegar
  if (message === "Login successful!") {
    setTimeout(() => {
      navigate("/productspage");
    }, 2000);
  }

  return (
    <>
      <Header />
      <div className="credentials-container">
        <div className="credentials-subcontainer">
          <p className="credentials-title">Login To Your Account</p>
          <form onSubmit={handleSubmit} className='credentials-form' >
            <label htmlFor='email' >
              <input className='table' type="text" ref={email} placeholder="Email" required />
            </label>
            <label htmlFor='password'>
              <input className='table' type="password" ref={password} placeholder="Password" required />
            </label>
            <button className='credentials-button' type='submit'>Login</button>
          </form>
          {/* permutar entre mensagem vermelha ou verder */}
          {/* fazer set timeout 1 seg e passar para login page caso sucesso */}
          <p className={message === "Login successful!" ? "success-message" : "error-message"}> {message}</p>
          {/* {message === "Login successful!" ? {redirect} : "null"} */}
          <p className="credentials-message">
            Don't have an account?
            <Link to="/register" className="credentials-redirect"> Register here</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}


export default Login