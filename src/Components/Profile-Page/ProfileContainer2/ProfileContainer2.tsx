import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto"
import "./ProfileContainer2.css"

export default function ProfileContainer2({userItem, user, setUser, validateUser}:any) {

    //@ts-ignore
    const isFollowed = !!userItem.followedBy.find(potentialFollower => potentialFollower.following.userName === user.userName)
    const userCheck = user.userName === userItem.userName

    return (

        <>

            {isFollowed || userCheck  ? (

                <section className="profileContainer2-wrapper">

                    {

                        //@ts-ignore
                        userItem?.photos.map(photo => 
                            
                            <ProfilePhoto 
                                photo = {photo}
                                key = {photo.id}
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