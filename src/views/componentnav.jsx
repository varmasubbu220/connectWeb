import '../cssfiles/componentnav.css'
import backbutton from '../assets/back-button.png'

const ComponentsNav=(x)=>{
    return(<>
    <div className="viewads-nav"><img src={backbutton} onClick={()=>{window.history.back()}}alt="" />{x.heading}</div>    
    </>

    )
}
export default ComponentsNav;

