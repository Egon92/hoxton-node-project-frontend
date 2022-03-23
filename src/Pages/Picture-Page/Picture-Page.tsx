import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon";
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon";
import "./Picture-Page.css";

function Picture({user, setUser, validateUser, setModal, searchTerm, setSearchTerm}:any) {

  return (

    <>

      <HeaderCommon
        user = {user}
        setUser = {setUser}
        setModal = {setModal}
        searchTerm = {searchTerm}
        setSearchTerm = {setSearchTerm}
      />
      
      <FooterCommon />
    
    </>

  )
  
}

export default Picture;