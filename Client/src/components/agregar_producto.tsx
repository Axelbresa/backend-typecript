import React, { useState } from 'react';
import { FaTag, FaDollarSign, FaListAlt, FaBox, FaUser } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom'; // Importar useParams
import "../stilos/form_add_producto.css";
import Swal from 'sweetalert2';

export default function AgregarProducto() {
  const { userId } = useParams(); // Obtener userId desde la URL
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidadStock, setCantidadStock] = useState('');
  const [proveedor, setProveedor] = useState('');

  const handleAgregarProducto = async (e:any) => {
    e.preventDefault();

    console.log(userId)

    // Crear el cuerpo de la solicitud
    const nuevoProducto = {
      nombre,
      descripcion,
      categoria,
      precio,
      cantidad_stock: cantidadStock,
      proveedor,
      userId, // Incluir el userId en el cuerpo
    };
    
    try {
      const response = await fetch(`http://localhost:3100/producto/${userId}`, { // Agregar el userId como parámetro en la URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Si es necesario enviar token
        },
        body: JSON.stringify(nuevoProducto),
      });
     
      const data = await response.json();
      console.log(data)

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Producto agregado exitosamente',
          confirmButtonText: 'Aceptar',
        })
        navigate('/listado_productos');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: data.message || 'No se pudo agregar el producto',
          confirmButtonText: 'Aceptar',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error de conexión al servidor',
        confirmButtonText: 'Aceptar',
      });
    }

  };


  //cancelar
   //cancelar
   const handleCancel = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¿Deseas cancelar esta acción?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cancelar',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Cancelado correctamente',
          text: 'Has cancelado la acción exitosamente',
          confirmButtonText: 'Aceptar',
        }).then(() => {
          navigate('/listado_productos'); // Redirigir a la página de listado_productos
        });
      } else {
        Swal.fire({
          icon: 'info',
          title: 'Acción no cancelada',
          text: 'Puedes continuar con tu tarea',
          confirmButtonText: 'Aceptar',
        });
      }
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-3xl font-bold">Agregar Nuevo Producto</h2>
        </div>
        <form className="space-y-4" onSubmit={handleAgregarProducto}>
          <div className="relative">
            <FaTag className="absolute top-1 left-2 text-gray-500" />
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 ml-7">
              Nombre del Producto
            </label>
            <input
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ingrese el nombre del producto"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 pl-10 text-gray-700 focus:ring-primary focus:border-primary input-editar"
            />
          </div>

          <div className="relative">
            <FaListAlt className="absolute top-1 left-2 text-gray-500" />
            <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 ml-7">
              Descripción
            </label>
            <textarea
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Ingrese la descripción del producto"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 pl-10 text-gray-700 focus:ring-primary focus:border-primary input-editar"
            />
          </div>

          <div className="relative">
            <FaBox className="absolute top-1 left-2 text-gray-500" />
            <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 ml-7">
              Categoría
            </label>
            <input
              id="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              placeholder="Ingrese la categoría"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 pl-10 text-gray-700 focus:ring-primary focus:border-primary input-editar"
            />
          </div>

          <div className="relative">
            <FaDollarSign className="absolute top-1 left-2 text-gray-500" />
            <label htmlFor="precio" className="block text-sm font-medium text-gray-700 ml-7">
              Precio
            </label>
            <input
              id="precio"
              type="number"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              placeholder="Ingrese el precio"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 pl-10 text-gray-700 focus:ring-primary focus:border-primary input-editar"
              step="0.01"
            />
          </div>

          <div className="relative">
            <FaBox className="absolute top-1 left-2 text-gray-500" />
            <label htmlFor="cantidad_stock" className="block text-sm font-medium text-gray-700 ml-7">
              Cantidad en Stock
            </label>
            <input
              id="cantidad_stock"
              type="number"
              value={cantidadStock}
              onChange={(e) => setCantidadStock(e.target.value)}
              placeholder="Ingrese la cantidad en stock"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 pl-10 text-gray-700 focus:ring-primary focus:border-primary input-editar"
            />
          </div>

          <div className="relative">
            <FaUser className="absolute top-1 left-2 text-gray-500" />
            <label htmlFor="proveedor" className="block text-sm font-medium text-gray-700 ml-7">
              Proveedor
            </label>
            <input
              id="proveedor"
              value={proveedor}
              onChange={(e) => setProveedor(e.target.value)}
              placeholder="Ingrese el nombre del proveedor"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 pl-10 text-gray-700 focus:ring-primary focus:border-primary input-editar"
            />
          </div>

          <div className="flex justify-between mt-4">
          <button
          type="button"
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleCancel}
         > 
             Cancelar
          </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Agregar Producto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
