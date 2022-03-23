import ModalFollower from "../../Components/ModalFollower";
import "./FollowerModal.css";

function FollowerModal({modal, setModal, user, userItem}:any) {

  function handleCloseModal() {
    setModal('')
  }

  return (

    <div className="modal-wrapper">
      <div id="homesearch-modal-wrapper">
        <div id="top-modal">

          <div id="followers-wrapper">
            <span id="followers">Followers</span>
          </div>

          <div id="closetab-wrapper">
            <span id="closetab" onClick={function () {
              handleCloseModal()
            }}>Close</span>
          </div>

        </div>

        <div id="bottom-modal">

          {

            //@ts-ignore
            userItem.followedBy.map(follower => 

            
      
              <ModalFollower
                key = {follower.id}
                follower = {follower}
              />
              
            

          )}

        </div>

      </div>
    </div>
  );
}

export default FollowerModal;
