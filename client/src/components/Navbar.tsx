import campushoodLogo from "../assets/logo.png";
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/home">
          <img src={campushoodLogo} alt="Campushood Logo" style={{ width: '100%', height: '100%' }}  />
        </a>
      </div>

      <ul className="navbar-links">
        <li><a href="/" className="account-link">Account</a></li>
      </ul>
      <div className="popup-box">
        <p>Hello, I am the popup.</p>
      </div>
    </nav>
  );
};

export default Navbar;
