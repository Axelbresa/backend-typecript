import React, { useEffect, useState } from 'react';
import Nav from './Nav';

const ListadoProductos = () => {
  const [productos, setProductos] = useState([]);

  // Función para obtener los productos del backend
  const fetchProductos = async () => {
    try {
      const response = await fetch('http://localhost:3100/producto', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Agregar token si es necesario
          Authorization: `Bearer ${localStorage.getItem('token')}`,
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
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center p-4">
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
