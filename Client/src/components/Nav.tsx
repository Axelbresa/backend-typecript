import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Nav() {
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserId = async () => {
      const token = localStorage.getItem('token'); // Obtener el token del localStorage
      
      if (!token) {
        // Si no hay token, redirigir a inicio de sesión
        navigate('/login');
        return;
      }

      try {
        const response = await fetch('http://localhost:3100/user/info', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Enviar el token en la cabecera
          },
        });

        if (!response.ok) {
          throw new Error('Error al obtener el ID del usuario');
        }

        const data = await response.json();
        setUserId(data.id); // Suponiendo que la respuesta tiene una propiedad `id`
      } catch (error) {
        console.error('Error:', error);
        // Redirigir a inicio de sesión en caso de error
        navigate('/login');
      }
    };

    fetchUserId();
  }, [navigate]);

  const handleLogout = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Limpiar el localStorage
        localStorage.clear();
  
        // Redirigir al usuario a la página de inicio de sesión
        navigate('/');
  
        // Mostrar mensaje de éxito
        Swal.fire({
          icon: 'success',
          title: '¡Sesión cerrada!',
          text: 'Has cerrado sesión correctamente.',
          confirmButtonText: 'Aceptar',
        });
      }
    });
  };
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex flex-col md:flex-row md:justify-between">
        <Link to="/listado_productos" className="text-lg hover:text-gray-400 mb-2 md:mb-0 md:mr-4">
          Listado de Productos
        </Link>
        {/* Incluir userId en la URL solo si está disponible */}
        {userId && (
          <Link to={`/agregar_producto/${userId}`} className="text-lg hover:text-gray-400 mb-2 md:mb-0 md:mr-4">
            Agregar Producto
          </Link>
        )}
        <button onClick={handleLogout} className="text-lg hover:text-gray-400">
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
}

export default Nav;
