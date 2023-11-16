import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Home() {
  const { isSignedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };
  const handleLogout = () => {
    logout();
    navigate(0);
  };

  return isSignedIn ? (
    <div>
      Logged In
      <div>
        <button onClick={handleLogout}>Log out</button>
      </div>
      <div>
        <button onClick={() => navigate('/private')}>Private page</button>
      </div>
    </div>
  ) : (
    <div>
      Home page <button onClick={handleLogin}>login page</button>
    </div>
  );
}

export default Home;
