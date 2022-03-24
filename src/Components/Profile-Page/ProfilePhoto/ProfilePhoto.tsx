import "./ProfilePhoto.css"

function ProfilePhoto({photo, user, userItem, setUserItem, setUser}:any) {
  
  const compareUsers = user.id === userItem.id

  async function deletePhoto() {
        
    if (compareUsers) {

      await fetch(`http://localhost:4000/photos/${photo.id}`, {
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
            setUserItem(data)
            setUser(data)
        }

      })

    }

  }

  return (
  
    <>
    
      <div className="photo-item-wrapper-ultimate">

        <div className="photo-item">
          <img src= {photo.src} alt="" />
        </div>

        {

          compareUsers ? (
            <span onClick={function () {
              deletePhoto()
            }}>X</span>
          ):null

        }

      </div>

    </>

  )
  
}

export default ProfilePhoto;