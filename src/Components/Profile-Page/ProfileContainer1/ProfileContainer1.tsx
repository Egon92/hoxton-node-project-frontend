import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "../ProfileContainer1/ProfileContainer1.css"

export default function ProfileContainer1({user, setUser, validateUser}:any) {

    // useEffect(() => {
    //     validateUser()
    // }, [])
      
    // const navigate = useNavigate()
    
    // if(user === null) {
    //     navigate('/login')
    // }

    console.log(user)
    
    return (

        <>

            <section className="profileContainer1-wrapper">

                <div className="profile-image-wrapper">
                    <img src={user.avatar[0].src} />
                </div>

                <div className="profile-nav">
                    <span>{user.userName}</span>
                    <button>Follow</button>
                </div>

                <div className="profile-stats">
                    <span><strong>{user.countPhotosCreated}</strong> Posts</span>
                    <span><strong>{user.countFollowers}</strong> Followers</span>
                    <span><strong>{user.countFollowing}</strong> Following</span>
                </div>

                <div className="profile-bio">
                    <p>
                        {user.fullName}
                        {user.description}
                    </p>
                </div>

            </section>

        </>

    )
    
}