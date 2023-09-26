
import user from "../assets/user.png";
import "../cssfiles/profilebar.css"
import heart from "../assets/heart.png"
import { useNavigate } from "react-router-dom";
const ProfileBar=(x)=>{
    
    const navigate=useNavigate();

    return(
        <>
        <div className='profile-bar'>
        <div className='user'><img src={user} alt="" /><b>{x.userdetails.username}</b><button>edit-profile</button>
        <hr />
        <div className="myads" onClick={()=>{navigate('/viewads')}}><img src={heart}alt=""/> <b>My-Ads</b>    </div>
        <button  id="logout-button" onClick={()=>{x.log()}}>log-out</button>
        
        </div>


</div>
        
        
        </>
    )
}
export default ProfileBar;