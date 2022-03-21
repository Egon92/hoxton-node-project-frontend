import "../ProfileContainer1/ProfileContainer1.css"

export default function ProfileContainer1() {

    return (

        <>

            <section className="profileContainer1-wrapper">

                <div className="profile-image-wrapper">
                    <img src="/assets/icons/logo.jpg" />
                </div>

                <div className="profile-nav">
                    <span>Hoxton.academy</span>
                    <button>Follow</button>
                </div>

                <div className="profile-stats">
                    <span><strong>18</strong> Posts</span>
                    <span><strong>250</strong> Followers</span>
                    <span><strong>213</strong> Following</span>
                </div>

                <div className="profile-bio">
                    <p>
                        Hoxton Academy
                        Computer Training School
                        London-based online education company that enables Albanian individuals to start their career in tech as Jr Full-stack Engineers in just 6 months.
                    </p>
                </div>

            </section>

        </>

    )
    
}