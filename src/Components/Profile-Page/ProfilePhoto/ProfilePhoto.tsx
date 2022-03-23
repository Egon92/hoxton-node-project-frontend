import "./ProfilePhoto.css"

function ProfilePhoto({photo, user, userItem}:any) {
  
  const compareUsers = user.id === userItem.id

  return (
  
    <div className="photo-item-wrapper-ultimate">

      <div className="photo-item">
        <img src= {photo.src} alt="" />
      </div>

      {

        compareUsers ? (
          <span>X</span>
        ):null

      }

    </div>

  )
  
}

export default ProfilePhoto;