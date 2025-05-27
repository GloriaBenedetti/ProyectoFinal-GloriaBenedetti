
//Para rutas protegidas, si se requiere autenticación
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) navigate('/'); // redirige si ya está logueado
  }, [navigate]);

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem('user', username);
      navigate('/carrito'); // redirige después del login
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default LoginPage;
