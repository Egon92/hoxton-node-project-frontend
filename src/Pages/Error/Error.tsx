import FooterCommon from "../../Components/Common/FooterCommon/FooterCommon";
import HeaderCommon from "../../Components/Common/HeaderCommon/HeaderCommon";
import "./Error.css";

function Error404({user, setUser, validateUser}:any) {
  
  return (

    <>

      <HeaderCommon />

      <div className="main-post">
        <h1>ERROR</h1>
        <h2>404</h2>
      </div>

      <FooterCommon />

    </>

  );

}

export default Error404;
