import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../services/auth';

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
      <button className='login-btn' onClick={handleLogin}> 
      
            <label>Sign In</label></button>
      
    </div>
  );
}
