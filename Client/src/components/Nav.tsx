import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Limpiar el localStorage
    localStorage.clear();

    // Redirigir al usuario a la página de inicio de sesión o donde desees
    navigate('/login');
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex flex-col md:flex-row md:justify-between">
        <Link to="/listado_productos" className="text-lg hover:text-gray-400 mb-2 md:mb-0 md:mr-4">
          Listado de Productos
        </Link>
        <Link to="/agregar_producto" className="text-lg hover:text-gray-400 mb-2 md:mb-0 md:mr-4">
          Agregar Producto
        </Link>
        <button onClick={handleLogout} className="text-lg hover:text-gray-400">
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
}

export default Nav;
