import { FaTag, FaDollarSign, FaListAlt, FaBox, FaUser } from 'react-icons/fa';
import "../stilos/form_add_producto.css";

export default function AgregarProducto() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
                <div className="text-center space-y-4 mb-8">
                    <h2 className="text-3xl font-bold">
                        Agregar Nuevo Producto
                    </h2>
                </div>
                <div className="space-y-4">
                    <div className="relative">
                        <FaTag className="absolute top-1 left-2 text-gray-500" />
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 ml-7">
                            Nombre del Producto
                        </label>
                        <input
                            id="nombre"
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
                            placeholder="Ingrese la descripción del producto"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 pl-10 text-gray-700 focus:ring-primary focus:border-primary input-editar"
                            // rows="4"
                        />
                    </div>
                    <div className="relative">
                        <FaBox className="absolute top-1 left-2 text-gray-500" />
                        <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 ml-7">
                            Categoría
                        </label>
                        <input
                            id="categoria"
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
                            placeholder="Ingrese el nombre del proveedor"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 pl-10 text-gray-700 focus:ring-primary focus:border-primary input-editar"
                        />
                    </div>
                    <div className='flex justify-between mt-4'>
                        <button className="bg-gray-500 text-white px-4 py-2 rounded">
                            Cancelar
                        </button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">
                            Agregar Producto
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
