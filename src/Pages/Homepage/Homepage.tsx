import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon";
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon";
import "./Homepage.css";
import { useEffect, useState } from "react";
import HomePost from "../../Components/Homepage/HomePost";
import Modals from "../../Components/Modals";

function Homepage({user, setUser, validateUser, setModal, searchTerm, setSearchTerm, photos, setPhotos}:any) {
  
  useEffect(() => {
    validateUser()
  }, [])


  if (!photos) {
    return <main>loading...</main>
  }
  
  return (

    <main className="main-home-wrapper">

      {/* <Modals 
        modal = {modal}
        setModal = {setModal}
        user = {user}
        userItem = {userItem}
        filterUsersBySearch = {filterUsersBySearch}
        filterUsers = {filterUsers}
      /> */}

      <HeaderCommon
        user = {user}
        setUser = {setUser}
        setModal = {setModal}
        searchTerm = {searchTerm}
        setSearchTerm = {setSearchTerm}
      />

      <div className="photos">

        {

          //@ts-ignore
          photos.map(photo =>
            
            <HomePost 
              //@ts-ignore
              key = {photo.id}
              //@ts-ignore
              photo = {photo}
              user = {user}
              photos = {photos}
              setPhotos = {setPhotos}
            />

          )

        }

      </div>

      <FooterCommon />
    
    </main>

  )

}

export default Homepage;