import "./Profile-Page.css";
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon";
import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon";
import ProfileContainer1 from "../../Components/Profile-Page/ProfileContainer1/ProfileContainer1";
import ProfileContainer2 from "../../Components/Profile-Page/ProfileContainer2/ProfileContainer2";

function Profile() {
  
  return (
  
    <main className="profile-big-wrapper">

      <HeaderCommon />
      <ProfileContainer1 />
      <ProfileContainer2 />
      <FooterCommon />

    </main>

  )
  
}

export default Profile;