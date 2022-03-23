import "../ProfileContainer1/ProfileContainer1.css"

export default function ProfileContainer1({setUserItem, userItem, user, setUser, validateUser, setModal, followers, setFollowers}:any) {

    function handleShowFollowers() {
        setModal("following")
    }

    function handleShowFollowing() {
        setModal("following")
    }

    function follow(user:any, userItem:any) {

        let combination = false

        for (const follow of followers) {

            if (follow.followerId === user.id && follow.followingId === userItem.id) {
                combination = true
            }

        }

        if (combination === false) {
            
        const followData = {
            followerId: user.id,
            followingId: userItem.id
        }

        fetch('http://localhost:4000/followers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.token
            },
            body: JSON.stringify(followData)
        })
        .then(resp => resp.json())
        .then(data => {
        
            if (data.error) {
                alert(data.error)
            } 
            
            else {
                setUserItem(data)
            }

            })

        }

        else {
            alert("you already follow him")
        }

    }

    function unFollow(user:any, userItem:any) {
        
        const followersArray = [...followers]
        const getFollower = followersArray.find(follower => follower.followerId === user.id && follower.followingId === userItem.id)
        
        fetch(`http://localhost:4000/followers/${getFollower.id}`, {
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
        }

        })

    }

    //@ts-ignore
    const isFollowed = !!userItem.followedBy.find(potentialFollower => potentialFollower.following.userName === user.userName)
    const userCheck = user.userName === userItem.userName

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

                        isFollowed ? (
                            <button className="unfollow"  onClick={function () {
                                unFollow(user, userItem)
                            }}>Unfollow</button>
                        ): isFollowed === false && userCheck === false ? 
                        
                        (
                            <button className="follow" onClick={function () {
                                follow(user, userItem)
                            }}>Follow</button>
                        ):null

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