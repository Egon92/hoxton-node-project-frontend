import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup-Page.css";

function Signup({user, setUser, validateUser}:any) {

  const navigate = useNavigate()

  // const [users, setUsers] = useState([])
  const [userName, setUserName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [gender, setGender] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // function getUsersFromServer() {
  
  //     fetch("http://localhost:4000/users")
  //         .then(resp => resp.json())
  //         .then(usersFromServer => {
  //         setUsers(usersFromServer)
  //     })
  
  // }

  useEffect(() => {
      validateUser()
  }, [])

  if (user) {
      navigate("/home")
  }

  function handleFormSubmitSignUp(e:any) {

      e.preventDefault()
      
      const formData = {
          firstName: firstName,
          lastName: lastName,
          userName: userName,
          phoneNumber: phoneNumber,
          gender: gender,
          birthday: birthday,
          email: email,
          password: password
      }

      fetch('http://localhost:4000/users', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
      body: JSON.stringify(formData)
      })
      .then(resp => resp.json())
      .then(data => {

          if (data.error) {
              alert('Oops, something went wrong.')
          } 
          
          else {
              // we managed to create our user!
              localStorage.setItem('token', data.token)
              setUser(data.user)
          }

      })

  }

  function handleFirstNameChangeSignUp(e:any) {
      setFirstName(e.target.value)
  }

  function handleUserNameChangeSignUp(e:any) {
    setUserName(e.target.value)
  }

  function handleLastNameChangeSignUp(e:any) {
    setLastName(e.target.value)
  }

  function handlePhoneNumberChangeSignUp(e:any) {
    setPhoneNumber(e.target.value)
  }

  function handleGenderChangeSignUp(e:any) {
    setGender(e.target.value)
  }

  function handleBirthdayChangeSignUp(e:any) {
    setBirthday(e.target.value)
  }

  function handleEmailChangeSignUp(e:any) {
      setEmail(e.target.value)
  }

  function handlePasswordChangeSignUp(e:any) {
      setPassword(e.target.value)
  }

  return (
    <div className="signup-page-wrapper">
      <div className="left-main-wrapper">
        <img
          id="signup-page-img"
          src="https://images.pexels.com/photos/4050401/pexels-photo-4050401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          // src="https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div>
      <div className="right-main-wrapper">
        <form id="signup-form" onSubmit={function (e) {
          handleFormSubmitSignUp(e)
        }}>
          <h1>SocialLounge</h1>
          <div id="name-lastname-wrapper">
            <label id="name" htmlFor="">
              <input type="text" placeholder="Enter your first name" required onChange={function (e) {
                handleFirstNameChangeSignUp(e)
              }}/>
            </label>
            <label id="lastname" htmlFor="">
              <input type="text" placeholder="Enter your last name" required  onChange={function (e) {
                handleLastNameChangeSignUp(e)
              }}/>
            </label>
          </div>

          <label id="username" htmlFor="">
            <input type="text" placeholder="Enter your username" required onChange={function (e) {
                handleUserNameChangeSignUp(e)
              }}/>
          </label>

          <label id="select-gender-wrapper" htmlFor="">
            <div id="radio-text">Select your gender:</div>
            <div id="radio-wrapper">
              <div className="radio-wrapper">
                <div className="input-wrapper">
                  <input type="radio" id="male" name="gender" value="male" onChange={function (e) {
                handleGenderChangeSignUp(e)
              }}/>
                </div>

                <label htmlFor="male">Male</label>
              </div>

              <div className="radio-wrapper">
                <div className="input-wrapper">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    onChange={function (e) {
                      handleGenderChangeSignUp(e)
                    }}/>
                </div>

                <label htmlFor="female">Female</label>
              </div>

              <div className="radio-wrapper">
                <div className="input-wrapper">
                  <input type="radio" id="other" name="gender" value="other" onChange={function (e) {
                handleGenderChangeSignUp(e)
              }}/>
                </div>

                <label htmlFor="other">Other</label>
              </div>
            </div>
          </label>
          <label id="birthday-wrapper">
            <label htmlFor="birthday">Birthday:</label>
            <input type="date" id="birthday" name="birthday" onChange={function (e) {
                handleBirthdayChangeSignUp(e)
              }}/>
          </label>
          <label htmlFor="">
            <input
              id="phone-number"
              type="tel"
              placeholder="Enter your phone number"
              required
              onChange={function (e) {
                handlePhoneNumberChangeSignUp(e)
              }}/>
          </label>
          <label htmlFor="">
            <input type="text" id="email" placeholder="Enter your email" onChange={function (e) {
                handleEmailChangeSignUp(e)
              }}/>
          </label>
          <label htmlFor="">
            <input
              type="password"
              name=""
              id="password"
              placeholder="Enter your password"
              required
              onChange={function (e) {
                handlePasswordChangeSignUp(e)
              }}/>
          </label>

          <label htmlFor="">
            <button>Sign Up</button>
          </label>
          <label id="login-link-wrapper" htmlFor="">
            You have an account?
            <Link id="link" to={"../Login"}>
              Log In
            </Link>
          </label>
        </form>
      </div>
    </div>
  );
}

export default Signup;
