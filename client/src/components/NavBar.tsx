export function NavBar() {
    return(
        <div style={{ backgroundColor: '#333', padding: '10px', textAlign: 'center' }}>
            <a href="/food" style={{ color: 'white', textDecoration: 'none', marginRight: '10px' }}>Food</a>
            <a href="/transpo" style={{ color: 'white', textDecoration: 'none', marginRight: '10px' }}>Transportation</a>
            <a href="/misc" style={{ color: 'white', textDecoration: 'none' }}>Other</a>
        </div>
    )
}