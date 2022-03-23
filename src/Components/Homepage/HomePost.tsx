import "./HomePost.css"
//@ts-ignore
import Heart from "react-heart"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePost({photo, user, setPhotos}:any) {
  
  const [isClick, setClick] = useState(false);
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')

  if (photo === null) {

  }
  const navigate = useNavigate()

  function getCommentsFromServer () {

    fetch(`http://localhost:4000/comments`)
      .then(resp => resp.json())
      .then(commentsFromServer => setComments(commentsFromServer))
    
  }

  useEffect(getCommentsFromServer, [])

  function handleRedirectToUser(userId:any) {
    navigate(`/users/${userId}`)
  }

  function handleCommentChange(e:any) {
    setComment(e.target.value)
  }

  function handleCreateComment(e:any) {

    e.preventDefault()
    
    const commentData = {
      content: comment,
      userId: user.id,
      photoId: photo.id
    }

    fetch('http://localhost:4000/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.token
        },
        body: JSON.stringify(commentData)
    })
      .then(resp => resp.json())
      .then(data => {
    
      if (data.error) {
          alert(data.error)
      } 
      
      else {
          setPhotos(data)
      }

      })

  }

  async function deleteComment(e:any) {
        
    const commentsArray = [...comments]
    //@ts-ignore
    const getComment:any = commentsArray.find(comment => comment?.userId === user?.id && comment?.photoId === photo?.id)
    
    if (getComment) {

      await fetch(`http://localhost:4000/comments/${getComment.id}`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.token
      }
      })
      .then(resp => resp.json())
      .then(data => {
      
      if (data.error) {
          alert(data.error)
      } 
          
      else {
          setPhotos(data)
      }

      })

    }

  }

  return (
  
    <>

      <div className="photo-wrapper">

        <div className="home-photo-nav">
          <img src={photo?.userWhoCreatedIt?.avatar[0]?.src} />
          <span>{photo?.userWhoCreatedIt?.userName}</span>
        </div>

        <div className="photo-large">
          <img src={photo?.src} />
        </div>

        <div className="photo-buttons">

          <div className="button-group">
            <Heart isActive={isClick} onClick={() => setClick(!isClick)} style = {{height:'20px'}} />
          </div>

          <span className="likes">{photo?.countLikesInside} Likes</span>

          <hr />

        </div>

        <div className="photo-comments">

          <span className="userCreated" onClick={function () {
            handleRedirectToUser(photo?.userWhoCreatedIt?.id)
          }}>{photo?.userWhoCreatedIt?.userName}</span>
          
          <p>
            {photo?.caption}
          </p>


          <span className="viewAll">View all {photo?.countCommentsInside} Comments</span>

          <div className="comments-group">

            {

              //@ts-ignore
              photo?.comments?.map(comment => 

                <li key={comment?.id} className="comments-inside-photo">

                  {/* <img src={comment.userWhoCreatedIt.avatar.src} /> */}

                  <span className="userComment" onClick={function () {
                    handleRedirectToUser(comment?.userWhoCreatedIt.id)
                  }}>{comment?.userWhoCreatedIt?.userName}</span>

                  <span>{comment?.content}</span>

                  <button className="remove-comment" onClick={function (e) {
                    deleteComment(e)
                  }}>X</button>

                </li>
                
              )

            }

          </div>

          <form onSubmit={function(e) {
            handleCreateComment(e)
          }} >

            <input type="text" name="comment" onChange={function (e) {
              handleCommentChange(e)
            }} />

            <button type="submit">Add new comment</button>

          </form>

        </div>

      </div>

    </>

  )
  
}

export default HomePost;