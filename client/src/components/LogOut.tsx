const logoutStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
};

export function LogoutButton() {
    return (
        <div style={logoutStyle}>
        <button>Logout</button>
        </div>
    );

   
}
