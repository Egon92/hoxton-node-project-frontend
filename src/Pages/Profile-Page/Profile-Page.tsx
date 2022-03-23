import "./Profile-Page.css";
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon";
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon";
import ProfileContainer1 from "../../Components/Profile-Page/ProfileContainer1/ProfileContainer1";
import ProfileContainer2 from "../../Components/Profile-Page/ProfileContainer2/ProfileContainer2";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modals from "../../Components/Modals";

function Profile({user, setUser, validateUser, modal, setModal}:any) {
  
  useEffect(() => {
    validateUser()
  }, [])
  

  const params = useParams()

  const [userItem, setUserItem]:any = useState(null)
  const [followers, setFollowers]:any = useState([])

  function getIndividualUserFromServer () {

      fetch(`http://localhost:4000/users/${params.id}`)
        .then(resp => resp.json())
        .then(userFromServer => setUserItem(userFromServer))
      
  }
  
  useEffect(getIndividualUserFromServer, [])

  function getFollowersFromServer () {

    fetch(`http://localhost:4000/followers`)
      .then(resp => resp.json())
      .then(followersFromServer => setFollowers(followersFromServer))
    
  }

  useEffect(getFollowersFromServer, [])

  if (userItem === null) {
      return <main>Loading...</main>
  }

  if (userItem.userName === undefined) {
      return <main>Blog Article not found</main>
  }

  if(user === null) {
    return <main>Loading...</main>
  }

  console.log(user)

  // const navigate = useNavigate()

  // if(user === null) {
  //   navigate('/login')
  // }

  return (
    
  
    <main className="profile-big-wrapper">

      <Modals 
        modal = {modal}
        setModal = {setModal}
        user = {user}
        userItem = {userItem}
      />

      <HeaderCommon
        user = {user}
        setUser = {setUser}
      />
      
      <ProfileContainer1 userItem = {userItem} user = {user} setUser = {setUser} validateUser = {validateUser} setModal = {setModal} followers = {followers} setFollowers = {setFollowers} />
      <ProfileContainer2 userItem = {userItem} user = {user} setUser = {setUser} validateUser = {validateUser} />
      
      <FooterCommon />

    </main>

  )
  
}

export default Profile;