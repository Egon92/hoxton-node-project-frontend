import "./HomePost.css"
//@ts-ignore
import Heart from "react-heart"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePost({photo}:any) {
  
  const [isClick, setClick] = useState(false);
  const navigate = useNavigate()

  function handleRedirectToUser(userId:any) {
    navigate(`/users/${userId}`)
  }

  return (
  
    <>

      <div className="photo-wrapper">

        <div className="home-photo-nav">
          <img src={photo.userWhoCreatedIt.avatar[0].src} />
          <span>{photo.userWhoCreatedIt.userName}</span>
        </div>

        <div className="photo-large">
          <img src={photo.src} />
        </div>

        <div className="photo-buttons">

          <div className="button-group">
            <Heart isActive={isClick} onClick={() => setClick(!isClick)} style = {{height:'20px'}} />
          </div>

          <span className="likes">{photo.countLikesInside} Likes</span>

          <hr />

        </div>

        <div className="photo-comments">

          <span className="userCreated" onClick={function () {
            handleRedirectToUser(photo.userWhoCreatedIt.id)
          }}>{photo.userWhoCreatedIt.userName}</span>
          
          <p>
            {photo.caption}
          </p>


          <span className="viewAll">View all {photo.countCommentsInside} Comments</span>

          {

            //@ts-ignore
            photo.comments.map(comment => 

              <li key={comment.id}>

                {/* <img src={comment.userWhoCreatedIt.avatar.src} /> */}

                <span className="userComment" onClick={function () {
                  handleRedirectToUser(comment.userWhoCreatedIt.id)
                }}>{comment.userWhoCreatedIt.userName}</span>

                <span>{comment.content}</span>

              </li>
            )

          }

        </div>

      </div>

    </>

  )
  
}

export default HomePost;