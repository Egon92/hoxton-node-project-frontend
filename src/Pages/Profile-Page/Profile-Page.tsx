import "./Profile-Page.css";
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon";
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon";
import ProfileContainer1 from "../../Components/Profile-Page/ProfileContainer1/ProfileContainer1";
import ProfileContainer2 from "../../Components/Profile-Page/ProfileContainer2/ProfileContainer2";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modals from "../../Components/Modals";

function Profile({user, setUser, validateUser, modal, setModal, searchTerm, setSearchTerm}:any) {
  
  useEffect(() => {
    validateUser()
  }, [])
  

  const params = useParams()

  const [userItem, setUserItem]:any = useState(null)
  const [followers, setFollowers]:any = useState([])
  const [users, setUsers]:any = useState([])

  function getUsersFromServer () {

    fetch(`http://localhost:4000/users`)
      .then(resp => resp.json())
      .then(usersFromServer => setUsers(usersFromServer))
    
  }

  useEffect(getUsersFromServer, [])

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

  // console.log(user)

  // const navigate = useNavigate()

  // if(user === null) {
  //   navigate('/login')
  // }

  function filterUsersBySearch() {
    let usersFiltered = [...users]
    return usersFiltered = usersFiltered.filter(user => user.userName === searchTerm )
  }

  const filterUsers = filterUsersBySearch()

  return (
    
    <main className="profile-big-wrapper">

      <Modals 
        modal = {modal}
        setModal = {setModal}
        user = {user}
        userItem = {userItem}
        filterUsersBySearch = {filterUsersBySearch}
        filterUsers = {filterUsers}
      />

      <HeaderCommon
        user = {user}
        setUser = {setUser}
        setModal = {setModal}
        searchTerm = {searchTerm}
        setSearchTerm = {setSearchTerm}
      />
      
      <ProfileContainer1 setUserItem = {setUserItem} userItem = {userItem} user = {user} setUser = {setUser} validateUser = {validateUser} setModal = {setModal} followers = {followers} setFollowers = {setFollowers} />
      <ProfileContainer2 userItem = {userItem} user = {user} setUser = {setUser} validateUser = {validateUser} />
      
      <FooterCommon />

    </main>

  )
  
}

export default Profile;