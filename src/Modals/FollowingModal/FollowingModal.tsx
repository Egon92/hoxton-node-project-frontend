import ModalFollowing from "../../Components/ModalFollowing";
import "./FollowingModal.css";

function FollowingModal({ user, modal, setModal, userItem }: any) {
  function handleCloseModal() {
    setModal("");
  }

  return (
    <div className="modal-wrapper">
      <div id="homesearch-modal-wrapper">
        <div id="top-modal">
          <div id="followers-wrapper">
            <span id="followers">Following</span>
          </div>

          <div id="closetab-wrapper">
            <span
              id="closetab"
              onClick={function () {
                handleCloseModal();
              }}
            >
              Close
            </span>
          </div>
        </div>

        <div id="bottom-modal">
          {
            //@ts-ignore

            userItem.following.map((following) => (
              <ModalFollowing key={following.id} following={following} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default FollowingModal;
