import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Modals from "./Components/Modals";
import FollowerModal from "./Modals/FollowerModal/FolloweModal";
import FollowingModal from "./Modals/FollowingModal/FollowingModal";
import HomeSearchModal from "./Modals/HomeSearch/HomeSearchModal";
import PhotoModal from "./Modals/PhotoModal/PhotoModal";
import Error404 from "./Pages/Error/Error";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login-Page/Login-Page";
import Picture from "./Pages/Picture-Page/Picture-Page";
import Profile from "./Pages/Profile-Page/Profile-Page";
import Signup from "./Pages/Signup-Page/Signup-Page";

function App() {

  const [user, setUser] = useState(null);
  const [modal, setModal] = useState('')

  function validateUser() {
    if (localStorage.token) {
      fetch("http://localhost:4000/validate", {
        headers: {
          Authorization: localStorage.token,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.error) {
            console.log("Validation failed.");
          } else {
            setUser(data);
          }
        });
    }
  }

  return (

    <div className="App">

      <Routes>
        <Route index element={<Navigate replace to="/login" />} />
        <Route path="/home" element={<Homepage user = {user} setUser = {setUser} validateUser = {validateUser} setModal = {setModal} />} />
        <Route path="/users/:id" element={<Profile user = {user} setUser = {setUser} validateUser = {validateUser} modal = {modal} setModal = {setModal} />} />
        <Route path="/login" element={<Login  user = {user} setUser = {setUser} validateUser = {validateUser} />} setModal = {setModal} />
        <Route path="/signup" element={<Signup user = {user} setUser = {setUser} validateUser = {validateUser}/>} setModal = {setModal} />
        <Route path="/picture" element={<Picture user = {user} setUser = {setUser} validateUser = {validateUser} setModal = {setModal} />} />
        <Route path="*" element={<Error404 user = {user} setUser = {setUser} validateUser = {validateUser} />} />
      </Routes>

        {/* {
        modal === 'followers' ? (

          <FollowerModal 
            //@ts-ignore
            setModal = {setModal}
            user = {user}
            setUser = {setUser}
          />

        ): modal === 'following' ? (

          <FollowingModal 
            //@ts-ignore
            setModal = {setModal}
            user = {user}
            setUser = {setUser}
          />

        ): modal === 'homeSearch' ? (

          <HomeSearchModal 
          
            //@ts-ignore
            setModal = {setModal}
            user = {user}
            setUser = {setUser}

          />

        ): modal === 'photo' ? (

          <PhotoModal 
            //@ts-ignore
            setModal = {setModal}
            user = {user}
            setUser = {setUser}
          />

        ):null */}

      {/* } */}

    </div>

  );

}

export default App;
