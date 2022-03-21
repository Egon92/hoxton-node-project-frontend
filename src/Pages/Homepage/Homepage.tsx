import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon";
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon";
import "./Homepage.css";
//@ts-ignore
import Heart from "react-heart"
import { useState } from "react";

function Homepage() {
  
  const [isClick, setClick] = useState(false);

  return (

    <main className="main-home-wrapper">

      <HeaderCommon/>

      <div className="photos">

        <div className="photo-wrapper">

          <div className="home-photo-nav">
            <img src="/assets/icons/avatar.jpg" />
            <span>JurgenHasmeta</span>
          </div>

          <div className="photo-large">
            <img src="/assets/icons/leva.jpg" />
          </div>

          <div className="photo-buttons">

            <div className="button-group">
              <Heart isActive={isClick} onClick={() => setClick(!isClick)} style = {{height: '30px'}} />
              <i className="fas fa-comment"></i>
              <span>30505 Likes</span>
            </div>

          </div>

          <div className="photo-comments">

            <span>Jurgenhasmeta</span>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, explicabo.
            </p>

          </div>

        </div>

        <div className="photo-wrapper">

          <div className="home-photo-nav">
            <img src="/assets/icons/avatar.jpg" />
            <span>JurgenHasmeta</span>
          </div>

          <div className="photo-large">
            <img src="/assets/icons/leva.jpg" />
          </div>

          <div className="photo-buttons">

            <div className="button-group">
              <Heart isActive={isClick} onClick={() => setClick(!isClick)} style = {{height: '30px'}} />
              <i className="fas fa-comment"></i>
              <span>30505 Likes</span>
            </div>

          </div>

          <div className="photo-comments">

            <span>Jurgenhasmeta</span>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, explicabo.
            </p>

          </div>

        </div>

      </div>

      <FooterCommon />
    
    </main>

  )

}

export default Homepage;