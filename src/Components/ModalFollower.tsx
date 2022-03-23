import { useNavigate } from "react-router-dom"

export default function ModalFollower({follower}:any) {

    const navigate = useNavigate()
    console.log(follower)
    
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
                        src={follower?.following?.avatar[0]?.src}
                        alt=""
                    />
                </div>

                <div className="name-username-wrapper">
                    <div className="name">{follower?.following?.firstName} {follower?.following?.LastName}</div>
                    <div className="username" onClick={function () {
                        redirectToUser(follower?.following?.id)
                    }}>{follower?.following?.userName}</div>
                </div>

                <div className="remove-wrapper">
                    <button className="remove-button">Remove</button>
                </div>

                {/* <div className="remove-wrapper">
                    <button className="remove-button">Follower</button>
                </div> */}

            </div>

        </>

    )

}