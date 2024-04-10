import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../services/auth';
import '../styles/LogInButton.css';

export function LoginButton() {
  const navigate = useNavigate();
  const handleLogin = async () => {
    signInWithGoogle().then((result) => {
      navigate('/food');
    }).catch((error) => {
      console.log("Error occurred: ", error);
    });

  };
  return (
    <div>
      <button className="logInButton" onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
}
