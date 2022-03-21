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
          <label htmlFor="">
            <input type="text" placeholder="Enter your email" />
          </label>
          <label htmlFor="">
            <input type="text" placeholder="Enter your password" />
          </label>
          <label htmlFor="">
            <button>Log In</button>
          </label>
          <label id="signup-link-wrapper" htmlFor="">
            You have an account?
            <Link id="link" to={"../Login"}>
              Sign Up
            </Link>
          </label>
        </form>
      </div>
    </div>
  );
}

export default Signup;
