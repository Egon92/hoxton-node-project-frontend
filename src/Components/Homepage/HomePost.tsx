import FooterCommon from "../Common/FooterCommon/FooterCommon";
import HeaderCommon from "../Common/HeaderCommon/HeaderCommon";
import "./HomePost.css"
//@ts-ignore
import Heart from "react-heart"
import { useState } from "react";

function HomePost() {
  
  const [isClick, setClick] = useState(false);

  return (
  
    <>

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
            <Heart isActive={isClick} onClick={() => setClick(!isClick)} />
          </div>

          <span>30505 Likes</span>

        </div>

        <div className="photo-comments">

          <span>Jurgenhasmeta</span>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, explicabo.
          </p>

        </div>

      </div>

    </>

  )
  
}

export default HomePost;