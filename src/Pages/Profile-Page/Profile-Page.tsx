import "./Profile-Page.css";
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon";
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon";
import ProfileContainer1 from "../../Components/Profile-Page/ProfileContainer1/ProfileContainer1";
import ProfileContainer2 from "../../Components/Profile-Page/ProfileContainer2/ProfileContainer2";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile({user, setUser, validateUser}:any) {
  
  useEffect(() => {
    validateUser()
  }, [])
  
  console.log(user)

  // const navigate = useNavigate()

  // if(user === null) {
  //   navigate('/login')
  // }

  return (
  
    <main className="profile-big-wrapper">

      <HeaderCommon
        user = {user}
        setUser = {setUser}
      />
      
      <ProfileContainer1 user = {user} setUser = {setUser} validateUser = {validateUser} />
      <ProfileContainer2 user = {user} setUser = {setUser} validateUser = {validateUser} />
      
      <FooterCommon />

    </main>

  )
  
}

export default Profile;