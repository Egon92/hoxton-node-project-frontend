import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon";
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon";
import "./Homepage.css";

import { useEffect, useState } from "react";
import HomePost from "../../Components/Homepage/HomePost";

function Homepage() {
  
  const [photos, setPhotos] = useState([])
  const [avatars, setAvatars] = useState([])
  const [users, setUsers] = useState([])

  function getAvatarsFromServer () {

    fetch(`http://localhost:4000/avatars`)
      .then(resp => resp.json())
      .then(avatarsFromServer => setAvatars(avatarsFromServer))
      
  }

  function getUsersFromServer () {

    fetch(`http://localhost:4000/users`)
      .then(resp => resp.json())
      .then(usersFromServer => setUsers(usersFromServer))
      
  }

  function getPhotosFromServer () {

    fetch(`http://localhost:4000/photos`)
      .then(resp => resp.json())
      .then(photosFromServer => setPhotos(photosFromServer))
      
  }

  useEffect(getPhotosFromServer, [])
  useEffect(getUsersFromServer, [])
  useEffect(getAvatarsFromServer, [])

  return (

    <main className="main-home-wrapper">

      <HeaderCommon/>

      <div className="photos">

        {

          photos.map(photo =>
            
            <HomePost 
              //@ts-ignore
              key = {photo.id}
              //@ts-ignore
              photo = {photo}
              avatars = {avatars}
              users = {users}
            />

          )

        }

      </div>

      <FooterCommon />
    
    </main>

  )

}

export default Homepage;