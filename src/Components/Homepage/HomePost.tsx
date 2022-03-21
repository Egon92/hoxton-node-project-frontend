import "./HomePost.css"
//@ts-ignore
import Heart from "react-heart"
import { useState } from "react";

function HomePost({photo, avatars, users}:any) {
  
  const [isClick, setClick] = useState(false);
  
  // let photoCommentsId = []

  // for (const comment of photo.comments) {
  //   photoCommentsId.push(comment.id)
  // }

  // for (const user of users) {

  // }

  //@ts-ignore
  const findAvatar = avatars.find(avatar => avatar.userId === photo.userWhoCreatedIt.id)

  //@ts-ignore
  // const findCommentsOfPhoto = photo.comments.filter(comment => comment.photoId === photo.id )
  
  // let userId = []

  // for (const comment of photo.comments) {
  //   userId.push(comment.userId)
  // }

  //@ts-ignore
  // const findUserWhoCommented = users.find(user => filter(photo.comments.filter(comment => comment.userId === user.id)))

  return (
  
    <>

      <div className="photo-wrapper">

        <div className="home-photo-nav">
          <img src={findAvatar.src} />
          <span>{photo.userWhoCreatedIt.userName}</span>
        </div>

        <div className="photo-large">
          <img src={photo.src} />
        </div>

        <div className="photo-buttons">

          <div className="button-group">
            <Heart isActive={isClick} onClick={() => setClick(!isClick)} style = {{height:'26px'}} />
          </div>

          <span>{photo.countLikesInside} Likes</span>

        </div>

        <div className="photo-comments">

          <span>{photo.userWhoCreatedIt.userName}</span>
          
          <p>
            {photo.caption}
          </p>

          {

            //@ts-ignore
            photo.comments.map(comment => 
              <>
                {/* <span>{findUserWhoCommented.userName}</span> */}
                <span>{comment.content}</span>
              </>
            )

          }

        </div>

      </div>

    </>

  )
  
}

export default HomePost;