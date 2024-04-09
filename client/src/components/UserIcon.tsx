import userIcon from '../images/UserIcon.png';

const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '10px',
};

const userIconStyle: React.CSSProperties = {
    marginRight: '10px', // Adjust spacing as needed
};

export function UserIcon() {
    return(
        <div style={userIconStyle}>
            {/* You can replace the user icon with an actual image or an SVG */}
            <img src={userIcon} alt="User Icon" style={{ width: '3%', height: '3%' }} />
        </div>
    )
}