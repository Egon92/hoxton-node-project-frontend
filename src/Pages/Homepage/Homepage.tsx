import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon";
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon";
import "./Homepage.css";

import { useEffect, useState } from "react";
import HomePost from "../../Components/Homepage/HomePost";

function Homepage({user, setUser, validateUser}:any) {
  
  const [photos, setPhotos] = useState([])
  // const [users, setUsers] = useState([])

  // function getUsersFromServer () {

  //   fetch(`http://localhost:4000/users`)
  //     .then(resp => resp.json())
  //     .then(usersFromServer => setUsers(usersFromServer))
      
  // }

  function getPhotosFromServer () {

    fetch(`http://localhost:4000/photos`)
      .then(resp => resp.json())
      .then(photosFromServer => setPhotos(photosFromServer))
      
  }

  useEffect(getPhotosFromServer, [])
  // useEffect(getUsersFromServer, [])

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
            />

          )

        }

      </div>

      <FooterCommon />
    
    </main>

  )

}

export default Homepage;