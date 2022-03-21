import { Link } from "react-router-dom";
import "./Signup-Page.css";

function Signup() {
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
        <form id="signup-form">
          <h1>SocialLounge</h1>
          <div id="name-lastname-wrapper">
            <label id="name" htmlFor="">
              <input type="text" placeholder="Enter your first name" required />
            </label>
            <label id="lastname" htmlFor="">
              <input type="text" placeholder="Enter your last name" required />
            </label>
          </div>

          <label id="username" htmlFor="">
            <input type="text" placeholder="Enter your username" required />
          </label>

          <label id="select-gender-wrapper" htmlFor="">
            <div id="radio-text">Select your gender:</div>
            <div id="radio-wrapper">
              <div className="radio-wrapper">
                <div className="input-wrapper">
                  <input type="radio" id="male" name="gender" value="male" />
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
                  />
                </div>

                <label htmlFor="female">Female</label>
              </div>

              <div className="radio-wrapper">
                <div className="input-wrapper">
                  <input type="radio" id="other" name="gender" value="other" />
                </div>

                <label htmlFor="other">Other</label>
              </div>
            </div>
          </label>
          <label id="birthday-wrapper">
            <label htmlFor="birthday">Birthday:</label>
            <input type="date" id="birthday" name="birthday" />
          </label>
          <label htmlFor="">
            <input
              id="phone-number"
              type="tel"
              placeholder="Enter your phone number"
              required
            />
          </label>
          <label htmlFor="">
            <input type="password" id="email" placeholder="Enter your email" />
          </label>
          <label htmlFor="">
            <input
              type="password"
              name=""
              id="password"
              placeholder="Enter your password"
              required
            />
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
