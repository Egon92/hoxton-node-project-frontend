import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto"
import "./ProfileContainer2.css"

export default function ProfileContainer2({userItem, user, setUser, validateUser}:any) {

    // useEffect(() => {
    //     validateUser()
    // }, [])
      
    // const navigate = useNavigate()
    
    // if(user === null) {
    //     navigate('/login')
    // }

    //@ts-ignore
    // const isFollowed = user?.following?.includes(user => user?.follower?.id === userItem?.id )
    
    console.log(user, userItem)

    //@ts-ignore
    const isFollowed = user?.following?.find(userParam => {
        
        const result = userParam?.follower?.userName === userItem?.userName;
        console.log({userParam, userItem, result })
        return result;
    })

    console.log(isFollowed)

    return (

        <>

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

        </>

    )
    
}