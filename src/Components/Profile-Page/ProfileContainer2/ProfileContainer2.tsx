import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto"
import "./ProfileContainer2.css"

export default function ProfileContainer2({user, setUser, validateUser}:any) {

    // useEffect(() => {
    //     validateUser()
    // }, [])
      
    // const navigate = useNavigate()
    
    // if(user === null) {
    //     navigate('/login')
    // }
    
    return (

        <>

            <section className="profileContainer2-wrapper">

                {

                    //@ts-ignore
                    user.photos.map(photo => 
                        
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