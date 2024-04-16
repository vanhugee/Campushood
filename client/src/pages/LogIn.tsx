import { LoginButton } from '../components/LogIn'
import { IntroBox } from '../components/IntroBox';
import '../styles/LogInPage.css'
import background from '../assets/davidson.jpg'



export function LogInPage() {
    return (
            
        <div className='LogInPageWrapper' style={{ backgroundImage: `url(${background})`}}>
            <h1>Welcome to CampusHood</h1>
            <h3>Your ultimate solution to resource sharing on college campuses</h3>
            <LoginButton />
            <IntroBox />
        </div>
        

    )
}
