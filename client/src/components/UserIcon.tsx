import userIcon from '../assets/UserIcon.png';
import '../styles/UserIcon.css'


export function UserIcon() {
    return(
        <a href = {"/food"}>
            <div className='userIconStyle'>
                {/* You can replace the user icon with an actual image or an SVG */}
                <img src={userIcon} alt="User Icon" style={{ width: '3%', height: '3%' }} />
            </div>
        </a>
    )
}