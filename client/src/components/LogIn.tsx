import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../services/auth';

export function LoginForm() {
  const navigate = useNavigate();
  const handleLogin = async () => {
    signInWithGoogle().then((result) => {
      navigate('/auth');
    }).catch((error) => {
      console.log("Error occurred: ", error);
    });

  };
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}
