import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon";
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon";
import "./Picture-Page.css";

function Picture({user, setUser, validateUser, setModal}:any) {

  return (

    <>

      <HeaderCommon
        user = {user}
        setUser = {setUser}
      />
      
      <FooterCommon />
    
    </>

  )
  
}

export default Picture;