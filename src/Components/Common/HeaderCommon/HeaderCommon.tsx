import { useNavigate } from "react-router-dom"
import "./HeaderCommon.css"

function HeaderCommon({user, setUser}:any) {
  
  const navigate = useNavigate()

  function handleLogOut(e:any) {
      e.preventDefault()
      localStorage.removeItem('token')
      setUser(null)
      navigate("/login")
  }

  return (
  
    <header className="header-container">

      <ul className="header-logo-container">
        <li>SocialLounge</li>
      </ul>

      <ul className="header-search-container">

        <form className="form-search">

          <input type="text" name="searchProduct" placeholder="Search for users." />

          <button id="special-button">
              Search
          </button>

        </form>

      </ul>

      {

        user === null ? (

          <ul className="header-avatar-container">
            <img src="/assets/icons/home.png"/>
            <img src="/assets/icons/user.png"/>
          </ul>

        ): (

            <div className="dropdown">

              <li className="dropbtn">
                  <img src={user.avatar.src} />
                  {user.userName}
              </li>

              <div className="dropdown-content">

                  <button className="log-out" onClick={function (e) {
                    handleLogOut(e)
                  }}>

                      <span>Log Out</span>
                      
                  </button>

              </div>

            </div>

          )

      }

    </header>

  )
    
}
  
export default HeaderCommon;