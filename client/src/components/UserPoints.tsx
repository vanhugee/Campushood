const pointsContainerStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50px', // Adjust the top position as needed
    left: '-32px', // Adjust the left position as needed
    backgroundColor: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
};

const pointsTextStyle: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: 'bold',
};

export function UserPoints() {
    return (
        <div style={pointsContainerStyle}>
            <span style={pointsTextStyle}>Points: 50</span>
        </div>
    );
}
