import "./HeaderCommon.css"

function HeaderCommon() {
  
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

        <ul className="header-avatar-container">
          <img src="/assets/icons/home.png"/>
          <img src="/assets/icons/user.png"/>
        </ul>

      </header>
  
    )
    
  }
  
export default HeaderCommon;