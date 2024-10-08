import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom'; // Para redirigir al formulario de actualización
import Swal from 'sweetalert2';

const ListadoProductos = () => {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate(); // Para navegar a la página de actualización

  // Función para obtener los productos del backend
  const fetchProductos = async () => {
    try {
      const response = await fetch('http://localhost:3100/producto', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Agregar token si es necesario
        },
      });
      const data = await response.json();
      
      if (response.ok) {
        setProductos(data);  // Asume que la respuesta es un array de productos
      } else {
        console.error('Error al traer los productos:', data.message);
      }
    } catch (error) {
      console.error('Error de conexión con el backend:', error);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);  // Ejecutar solo una vez al montar el componente

  // Función para manejar la redirección a la página de actualización
  const handleUpdate = (id) => {
    navigate(`/editar_producto/${id}`);
  };

  // Función para eliminar el producto
  const handleDelete = async (id) => {
    Swal.fire({
      title: '¿Estás seguro de que deseas eliminar este producto?',
      text: "No podrás revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`http://localhost:3100/producto/${id}`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
          });
  
          if (response.ok) {
            setProductos(productos.filter((producto) => producto.id !== id));
            Swal.fire({
              icon: 'success',
              title: 'Éxito',
              text: 'Producto eliminado correctamente',
              confirmButtonText: 'Aceptar',
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Error al eliminar el producto',
              confirmButtonText: 'Aceptar',
            });
          }
        } catch (error) {
          console.error('Error al eliminar el producto:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error al eliminar el producto',
            confirmButtonText: 'Aceptar',
          });
        }
      } else {
        Swal.fire({
          icon: 'info',
          title: 'Cancelado',
          text: 'La eliminación del producto ha sido cancelada',
          confirmButtonText: 'Aceptar',
        });
      }
    });
  };
  
  return (
    <div>
      <Nav />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Listado de Productos</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 border-b">
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Nombre</th>
              <th className="p-2 text-left">Descripcion</th>
              <th className="p-2 text-left">Precio</th>
              <th className="p-2 text-left">Categoria</th>
              <th className="p-2 text-left">Proveedor</th>
              <th className="p-2 text-left">Acciones</th> {/* Nueva columna para acciones */}
            </tr>
          </thead>
          <tbody>
            {productos.length > 0 ? (
              productos.map((producto) => (
                <tr key={producto.id} className="border-b">
                  <td className="p-2">{producto.id}</td>
                  <td className="p-2">{producto.nombre}</td>
                  <td className="p-2">{producto.descripcion}</td>
                  <td className="p-2">{producto.precio}</td>
                  <td className="p-2">{producto.categoria}</td>
                  <td className="p-2">{producto.proveedor}</td>
                  <td className="p-2">
                    {/* Botones de actualizar y eliminar */}
                    <button 
                      onClick={() => handleUpdate(producto.id)} 
                      className="mr-2 p-1 bg-blue-500 text-white rounded">
                      Actualizar
                    </button>
                    <button 
                      onClick={() => handleDelete(producto.id)} 
                      className="p-1 bg-red-500 text-white rounded">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center p-4">
                  No hay productos disponibles.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListadoProductos;
