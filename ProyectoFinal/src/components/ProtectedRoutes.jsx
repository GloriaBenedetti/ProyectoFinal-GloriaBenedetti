
//Verifica se hay un usuario logueado y redirige si no lo hay
//Componente para proteger rutas(con autenticacion)
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const user = localStorage.getItem('user');
  return user ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
