import "./HomeSearchModal.css";

function HomeSearchModal() {
  return (
    <div id="homesearch-modal-wrapper">
      <div id="top-modal">
        <div id="recent-wrapper">
          <span>Recent</span>
        </div>
        <div id="clear-all-wrapper">
          <span>Clear all</span>
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
          <div className="x-wrapper">
            <img
              className="x-icon"
              src="../assets/icons/close_black_24dp.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSearchModal;
