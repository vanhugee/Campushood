import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../services/auth';
import '../styles/LogInButton.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from 'axios';

export function LoginButton() {
  const navigate = useNavigate();
  const handleLogin = async () => {
    signInWithGoogle().then((result) => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
          if (user) {
              console.log(user);
              axios.post('http://localhost:8080/user/create', {
                id: user.uid,
                email: user.email,
                name: user.displayName,
              })
              .then(function (response) {
                console.log(response);
                if (response.status === 201) {
                  localStorage.setItem('user', JSON.stringify(user));
                }
              })
              .catch(function (error) {
                console.log(error);
              });
          } else {
            console.log("User not logged in");
          }
      });
      
      navigate('/home');
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
