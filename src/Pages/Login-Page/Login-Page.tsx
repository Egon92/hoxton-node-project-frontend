import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login-Page.css";

function Login({user, setUser, validateUser}:any) {

  useEffect(() => {
    validateUser()
  }, [])

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  function handleEmailChangeSignIn(e:any) {
      e.preventDefault()
      const email = e.target.value 
      setEmail(email)
  }

  function handlePasswordChangeSignIn(e:any) {
      e.preventDefault()
      const password = e.target.value 
      setPassword(password)
  }

  function handleFormSubmitSignIn(e:any) {

      e.preventDefault()

      const email = e.target.email.value
      const password = e.target.password.value
      
      const formData = {
          email:  email,
          password: password
      }
      
      fetch('http://localhost:4000/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
      },
          body: JSON.stringify(formData)
      })
      .then(resp => resp.json())
      .then(data => {
      
          if (data.error) {
              alert(data.error)
          } 
          
          else {
              // we managed to sign in!
              localStorage.setItem('token', data.token)
              setUser(data.user)
              navigate('/home')
          }

      })

  }

  if (user) {
      navigate("/home")
  }

  return (
    <div className="login-page-wrapper">
      <div className="left-main-wrapper">
        <img
          id="login-page-img"
          src="https://images.pexels.com/photos/4050401/pexels-photo-4050401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          // src="https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div>
      <div className="right-main-wrapper">
        <form id="login-form">
          <h1>SocialLounge</h1>
          <label htmlFor="">
            <input type="text" placeholder="Enter your email" required />
          </label>
          <label htmlFor="">
            <input type="text" placeholder="Enter your password" required />
          </label>
          <label htmlFor="">
            <button>Log In</button>
          </label>
          <label id="signup-link-wrapper" htmlFor="">
            Don't have an account?{" "}
            <Link id="link" to={"../Signup"}>
              Sign Up
            </Link>
          </label>
        </form>
      </div>
    </div>
  );
}

export default Login;
