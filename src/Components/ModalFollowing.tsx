import { useNavigate } from "react-router-dom"

export default function ModalFollowing({following}:any) {

    const navigate = useNavigate()

    function redirectToUser(userId:any) {
        navigate(`/users/${userId}`)
        window.location.reload()
    }

    return (

        <>

            <div className="profile-wrapper">

                <div className="profile-pic-wrapper">
                    <img
                        className="profile-pic"
                        src={following?.follower?.avatar[0]?.src}
                        alt=""
                    />
                </div>

                <div className="name-username-wrapper">
                    <div className="name">{following?.follower?.firstName} {following?.follower?.LastName}</div>
                    <div className="username" 
                    onClick={function () {
                        redirectToUser(following?.follower?.id)
                    }}>{following?.follower?.userName}</div>
                </div>

                <div className="remove-wrapper">
                    <button className="remove-button">Following</button>
                </div>

            </div>

        </>

    )

}