import "./PhotoModal.css";
function PhotoModal() {
  return (
    <div className="photo-modal-wrapper">
      <div className="left-modal-wrapper">
        <img id="modal-photo" src="../assets/icons/leva.jpg" alt="" />
      </div>
      <div className="right-modal-wrapper">
        <div className="top-right-modal">
          <div className="profile-name-wrapper">
            <img id="profile-pic" src="../assets/icons/logo.jpg" alt="" />
            <span id="name">Name Lastname</span>
          </div>
          <div className="content-wrapper">
            <p id="description-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              facere!
            </p>
            <span className="time-passed-since-post">2w</span>
          </div>
          <div className="three-points-wrapper">
            <img
              id="three-points-icon"
              src="../assets/icons/more_horiz_black_24dp.svg"
              alt=""
            />
          </div>
        </div>
        <div className="comments-wrapper">
          <div className="comment-wrapper">
            <span className="commentator">Name Lastname</span>
            <p className="comment">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              aut beatae ratione vero amet!
            </p>
          </div>
        </div>
        <div className="likes-and-icons-modal-wrapper">
          <div className="icons-wrapper">
            <img
              id="like-icon"
              src="../assets/icons/favorite_border_black_24dp.svg"
              alt=""
            />
            <img
              id="comment-icon"
              src="../assets/icons/chat_bubble_outline_black_24dp.svg"
              alt=""
            />
            <img
              id="send-icon"
              src="../assets/icons/send_black_24dp.svg"
              alt=""
            />
          </div>
          <div className="number-of-likes-wrapper">
            <span id="number-of-likes">Liked by x people</span>
          </div>
        </div>
        <div className="comment-and-number-wrapper">
          <label className="emojis-wrapper" htmlFor="">
            <img
              id="emojis-icon"
              src="../assets/icons/insert_emoticon_black_24dp.svg"
              alt=""
            />
          </label>
          <label id="comment-wrapper" htmlFor="">
            <input
              type="text"
              id="comment-text"
              placeholder="Enter your comment"
            />
          </label>
          <label className="post-button" htmlFor="">
            <button id="post-button">POST</button>
          </label>
        </div>
      </div>
    </div>
  );
}

export default PhotoModal;
