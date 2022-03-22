import "./FollowingModal.css";

function FollowingModal() {
  return (
    <div className="modal-wrapper">
      <div id="homesearch-modal-wrapper">
        <div id="top-modal">
          <div id="followers-wrapper">
            <span id="followers">Following</span>
          </div>
          <div id="closetab-wrapper">
            <span id="closetab">Close</span>
          </div>
        </div>
        <div id="bottom-modal">
          <div className="profile-wrapper">
            <div className="profile-pic-wrapper">
              <img
                className="profile-pic"
                src="../assets/icons/leva.jpg"
                alt=""
              />
            </div>
            <div className="name-username-wrapper">
              <div className="name">Name Lastname</div>
              <div className="username">Username</div>
            </div>
            <div className="remove-wrapper">
              <button className="remove-button">Following</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FollowingModal;
