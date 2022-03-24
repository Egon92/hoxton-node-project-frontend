import ModalLikes from "../../Components/ModalLikes";
import "./LikesModal.css";

function LikesModal({user, modal, setModal, userItem}:any) {

  function handleCloseModal() {
    setModal('')
  }

  return (

    <div className="modal-wrapper">

      <div id="homesearch-modal-wrapper">

        <div id="top-modal">

          <div id="followers-wrapper">
            <span id="followers">Following</span>
          </div>

          <div id="closetab-wrapper">
            <span id="closetab" onClick={function() {
              handleCloseModal()
            }}>Close</span>
          </div>

        </div>

        <div id="bottom-modal">

        {
            
            //@ts-ignore
            userItem.following.map(following => 
              
              <ModalLikes
                key = {following.id}
                following = {following}
              />
              
            

          )}

        </div>
      </div>
    </div>
  );
}

export default LikesModal;