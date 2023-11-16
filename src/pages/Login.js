import { useNavigate } from 'react-router-dom';
import { saveToLocalStorage } from '../utils/storage';
import useAuth from '../hooks/useAuth';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    saveToLocalStorage('token', 'xxxx');
    login({ id: 0 });
    navigate('/');
  };

  return <button onClick={handleLogin}>login</button>;
}

export default Login;
