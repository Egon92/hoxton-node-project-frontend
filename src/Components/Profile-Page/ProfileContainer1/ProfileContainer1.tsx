import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "../ProfileContainer1/ProfileContainer1.css"

export default function ProfileContainer1({userItem, user, setUser, validateUser, setModal}:any) {

    // useEffect(() => {
    //     validateUser()
    // }, [])
      
    // const navigate = useNavigate()
    
    // if(user === null) {
    //     return <main>loading....</main>
    // }

    function handleShowFollowers() {
        setModal("following")
    }

    function handleShowFollowing() {
        setModal("following")
    }

    const compare = userItem?.userName === user?.userName
    const compareFollow = user?.following?.follower?.id === userItem?.id
    console.log(compareFollow)

    // console.log(user)

    return (

        <>

            <section className="profileContainer1-wrapper">

                {

                    userItem?.avatar[0]?.src ? (

                        <div className="profile-image-wrapper">
                            <img src={userItem?.avatar[0]?.src} />
                        </div>

                    ):(
                        <div className="profile-image-wrapper">
                            <img src="/assets/avatars/blankavatar.jpg" />
                        </div>
                    )

                }
                

                <div className="profile-nav">

                    <span>{userItem?.userName}</span>
                    
                    {

                        compare ? (
                            <button>

                            </button>
                        ): compare === false && compareFollow ? (
                            <button>Unfollow</button>
                        ): (
                            <button>Follow</button>
                        )

                    }

                </div>

                <div className="profile-stats">

                    <span><strong>{userItem?.countPhotosCreated}</strong> Posts</span>
                    
                    <span onClick={function () {
                        handleShowFollowers()
                    }}><strong>{userItem?.countFollowers}</strong> Followers</span>
                    
                    <span onClick={function () {
                        handleShowFollowing()
                    }}><strong>{userItem?.countFollowing}</strong> Following</span>
                
                </div>

                <div className="profile-bio">
                    <p>
                        {userItem?.firstName} 
                        {userItem?.lastName}
                        {userItem?.description}
                    </p>
                </div>

            </section>

        </>

    )
    
}