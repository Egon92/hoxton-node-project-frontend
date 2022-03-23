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

  function redirectToHome() {
    navigate('/home')
  }
  
  function redirectToProfile(user:any) {
    navigate(`../users/${user.id}`)
  }
  
  return (
  
    <header className="header-container">

      <ul className="header-logo-container">
        <li onClick={function () {
          redirectToHome()
        }}>SocialLounge</li>
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

              <li className="dropbtn" onClick={function () {
                redirectToProfile(user)
              }}>
                  <img src={user.avatar[0].src} />
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