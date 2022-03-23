import { useNavigate } from "react-router-dom"

export default function ModalHomeSearch({user}:any) {

    const navigate = useNavigate()

    function redirectToUser(userId:any) {
        navigate(`../users/${userId}`)
        window.location.reload()
    }

    return (

        <>

            <div className="profile-wrapper">

                <div className="profile-pic-wrapper">
                    <img
                    className="profile-pic"
                    src={user?.avatar[0]?.src}
                    alt=""
                    />
                </div>

                <div className="name-username-wrapper" onClick={function () {
                    redirectToUser(user?.id)
                }}>
                    <div className="name">{user?.firstName} {user?.lastName}</div>
                    <div className="username">{user?.userName}</div>
                </div>

                {/* <div className="x-wrapper">
                    <img
                    className="x-icon"
                    src="../assets/icons/close_black_24dp.svg"
                    alt=""
                    />
                </div> */}

            </div>

        </>
    )
}