

//navegación entre secciones del sitio
import { Link ,useNavigate} from 'react-router-dom';



function Navbar() {
  const navigate = useNavigate();
  const user = localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Inicio</Link>
      <Link to="/carrito" style={styles.link}>Carrito</Link>
      {user ? (
        <>
          <span style={styles.link}>Hola, {user}</span>
          <button onClick={handleLogout}>Salir</button>
        </>
      ) : (
        <Link to="/login" style={styles.link}>Login</Link>
      )}
    </nav>
  );
}


const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1rem',
    backgroundColor: '#333',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Navbar;
