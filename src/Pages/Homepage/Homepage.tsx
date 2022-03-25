import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon";
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon";
import "./Homepage.css";

import { useEffect, useState } from "react";
import HomePost from "../../Components/Homepage/HomePost";
import Modals from "../../Components/Modals";

function Homepage({
  modal,
  user,
  setUser,
  validateUser,
  setModal,
  searchTerm,
  setSearchTerm,
}: any) {
  // const userItem = null
  const [photos, setPhotos] = useState([]);
  const [users, setUsers] = useState([]);

  function getUsersFromServer() {
    fetch(`http://localhost:4000/users`)
      .then((resp) => resp.json())
      .then((usersFromServer) => setUsers(usersFromServer));
  }

  useEffect(() => {
    validateUser();
  }, []);

  function getPhotosFromServer() {
    fetch(`http://localhost:4000/photos`)
      .then((resp) => resp.json())
      .then((photosFromServer) => setPhotos(photosFromServer));
  }

  useEffect(getPhotosFromServer, []);
  // useEffect(getUsersFromServer, [])

  if (!photos) {
    return <main>loading...</main>;
  }

  return (
    <div className="wrapper">
      <main className="main-home-wrapper">
        <Modals
          modal={modal}
          setModal={setModal}
          user={user}
          userItem={userItem}
          filterUsersBySearch={filterUsersBySearch}
          filterUsers={filterUsers}
        />

        <HeaderCommon
          user={user}
          setUser={setUser}
          setModal={setModal}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <div className="photos">
          {photos.map((photo) => (
            <HomePost
              //@ts-ignore
              key={photo.id}
              //@ts-ignore
              photo={photo}
              user={user}
              setPhotos={setPhotos}
            />
          ))}
        </div>

        <FooterCommon />
      </main>
    </div>
  );
}

export default Homepage;
