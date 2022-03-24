import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto"
import "./ProfileContainer2.css"

export default function ProfileContainer2({userItem, user, setUser, validateUser, setPhotos}:any) {

    //@ts-ignore
    const isFollowed = !!userItem.followedBy.find(potentialFollower => potentialFollower.following.userName === user.userName)
    const userCheck = user.userName === userItem.userName

    const [src, setSrc] = useState('')
    const [caption, setCaption] = useState('')

    function submitForm() {
            
        const photoData = {
            caption: caption,
            src: src,
            userId: user.id
        }
        
        if (caption === "" || src === "") {
            alert('dont enter void string values')
        }
        else {

            fetch('http://localhost:4000/photos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: localStorage.token
                },
                body: JSON.stringify(photoData)
            })
            .then(resp => resp.json())
            .then(data => {
        
                if (data.error) {
                    alert(data.error)
                } 
                
                else {
                    setPhotos(data)
                    window.location.reload()
                }

            })

        }
        
    }
  
    function handleChangeSrc(e:any) {
      setSrc(e.target.value)
    }
  
    function handleChangeCaption(e:any) {
      setCaption(e.target.value)
    }


    return (

        <>

            {

                userCheck ? (

                    <form className="form-add-photo" onSubmit={function (e) {
                        e.preventDefault()
                        submitForm()
                    }}>
        
                        <input type="text" name="addPhoto" placeholder="Add a Photo src" onChange={function (e) {
                        e.preventDefault()
                        handleChangeSrc(e)
                    }}/>
        
                        <input type="text" name="caption" placeholder="Enter caption here: " onChange={function (e) {
                        e.preventDefault()
                        handleChangeCaption(e)
                    }}/>
        
                        <button className="submit-add-photo">Submit</button>
                    
                    </form>

                ): null

            }

            {isFollowed || userCheck  ? (

                <section className="profileContainer2-wrapper">

                    {

                        //@ts-ignore
                        userItem?.photos.map(photo => 
                            
                            <ProfilePhoto 
                                photo = {photo}
                                key = {photo.id}
                                user = {user}
                                setUser = {setUser}
                                userItem = {userItem}
                            />

                        )

                    }

                </section>

            ): isFollowed === false && userCheck === false ? (
                <section className="not-auth">
                    <span>You have no access to this user photos, follow him to gain acces to it</span>
                </section>
                ):null
        
            }

        </>

    )
    
}