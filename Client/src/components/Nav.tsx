import React from 'react'

function Nav() {
  return (
    <header className="bg-gray-800 text-white p-4">
    <nav className="flex flex-col md:flex-row md:justify-between">
        <a href="/listado_productos" className="text-lg hover:text-gray-400 mb-2 md:mb-0 md:mr-4">Listado de Productos</a>
        <a href="/agregar_producto" className="text-lg hover:text-gray-400 mb-2 md:mb-0 md:mr-4">Agregar Producto</a>
        <a href="/cerrar_sesion" className="text-lg hover:text-gray-400">Cerrar Sesión</a>
    </nav>
</header>

  )
}

export default Nav