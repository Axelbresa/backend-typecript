# Proyecto Fullstack: Backend y Frontend

Este proyecto es una aplicación  que incluye un backend desarrollado en Node.js con Express y Postgre para manejar los datos, y un frontend en React.

## Estructura del Proyecto

- `/backend`: Contiene el servidor API que maneja las operaciones CRUD sobre equipos y se comunica con Postgre.
- `/frontend`: Contiene la aplicación React que interactúa con el backend para mostrar y gestionar los equipos.

## Requisitos Previos

- Node.js (versión 14 o superior)
- Postgre
- NPM (para manejar dependencias)

## Instalación

Sigue los siguientes pasos para instalar y configurar el proyecto.


### Clonar el repositorio

- git clone https://github.com/Axelbresa/backend-typecript

## Configuración de Variables de Entorno

Antes de ejecutar la aplicación, asegúrate de configurar las siguientes variables de entorno. Puedes hacerlo creando un archivo `.env` en el directorio raíz del proyecto y añadiendo las siguientes variables:


### Descripción de cada variable:

- **`PORT`**: El puerto en el que se ejecutará el servidor. S
  - Ejemplo: `PORT=3000`

- **`DATABASE_PUBLIC_URL`**: La URL de la base de datos que la aplicación utilizará. 
  - Ejemplo: `DATABASE_PUBLIC_URL=postgres://usuario:password@host:puerto/database`

- **`key`**: Una clave secreta o token que se utiliza para autenticación o cifrado.
  - Ejemplo: `key=miClaveSecreta`

### Ejemplo de archivo `.env`

```env
PORT=3000
DATABASE_PUBLIC_URL=postgres://usuario:password@host:5432/mydatabase
key=miClaveSecreta

