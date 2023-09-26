
import '../cssfiles/landing.css'
import Nav_bar from './navbar';
import { images } from '../redux-store/data-store'
import Slides from '../courosel/courosel'
const Landing_page=()=>{



    return(
    <>  
    <div className="main-body">
    <Nav_bar/>
    <Slides/>
    </div>
      

  
    </>
    )
}
export default  Landing_page;