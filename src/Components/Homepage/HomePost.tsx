import "./HomePost.css"
//@ts-ignore
import Heart from "react-heart"
import { useState } from "react";

function HomePost({photo}:any) {
  
  const [isClick, setClick] = useState(false);

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

          <span className="userCreated">{photo.userWhoCreatedIt.userName}</span>
          
          <p>
            {photo.caption}
          </p>


          <span className="viewAll">View all {photo.countCommentsInside} Comments</span>

          {

            //@ts-ignore
            photo.comments.map(comment => 
              <li key={comment.id}>
                {/* <img src={comment.userWhoCreatedIt.avatar.src} /> */}
                <span>{comment.userWhoCreatedIt.userName}</span>
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