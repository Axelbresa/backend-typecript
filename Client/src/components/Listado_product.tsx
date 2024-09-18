import React from 'react';
import Nav from "./Nav"

const ListadoProductos = () => {
    return (
        <div>
            <Nav></Nav>
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Listado de Productos</h1>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-200 border-b">
                        <th className="p-2 text-left">ID</th>
                        <th className="p-2 text-left">Nombre</th>
                        <th className="p-2 text-left">Precio</th>
                    </tr>
                </thead>
             
            </table>
        </div>
        </div>
    );
};

export default ListadoProductos;
