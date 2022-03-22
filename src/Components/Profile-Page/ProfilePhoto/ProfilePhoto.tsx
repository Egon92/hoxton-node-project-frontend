import "./ProfilePhoto.css"

function ProfilePhoto({photo}:any) {
  
  return (
  
    <>

      <div className="photo-item">
        <img src= {photo.src} alt="" />
      </div>

    </>

  )
  
}

export default ProfilePhoto;