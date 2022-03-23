import ModalHomeSearch from "../../Components/ModalHomeSearch";
import "./HomeSearchModal.css";

function HomeSearchModal({users, modal, setModal, filterUsers}:any) {

  return (

    <div id="homesearch-modal-wrapper">

      <div id="top-modal">
        <div id="recent-wrapper">
          <span>Recent</span>
        </div>

        <div id="clear-all-wrapper">
          <span>Clear all</span>
        </div>

        <div className="remove-modal-home" onClick={function () {
          setModal("")
        }}>
            <span>X</span>
        </div>

      </div>

      <div id="bottom-modal">

        {
            
            //@ts-ignore
            filterUsers.map(user => 
              
              <ModalHomeSearch
                key = {user.id}
                user = {user}
              />

        )}

      </div>

    </div>
  );
}

export default HomeSearchModal;
