import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'; 
import "../stilos/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e:any) => {
    e.preventDefault();

    // Crear el cuerpo de la solicitud
    const requestBody = {
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:3100/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (response.ok) {
        // Almacenar el token en localStorage
        localStorage.setItem("token", data.token);

        // Opcional: Mostrar el token en la consola
        console.log("Token guardado:", data.token);

        Swal.fire({
          icon: 'success',
          title: '¡Se iniciado con exitoso!',
          text: 'Tu cuenta se logeado con éxito',
          confirmButtonText: 'Continuar',
        }).then(() => {
            // " // Redirigir al usuario después de iniciar sesión exitosamente
        navigate("/listado_productos");; // Redirige después de cerrar la alerta
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: data.message || 'Error al iniciar session contraseña incorrecta',
        });
        
      } 
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error de conexión con el servidor',
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full grid grid-cols-1 gap-8 contenedor-form-login">
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="text-center space-y-4 contactanos">
            <h2 className="text-3xl font-bold titulo-form-login">
              Iniciar sesión
            </h2>
          </div>
          <div className="space-y-4">
            <div className="relative">
              <FaEnvelope className="absolute top-1 left-2 text-gray-500" />
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 ml-7">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                placeholder="Ingrese su correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 pl-10 text-gray-700 focus:ring-primary focus:border-primary input-form-login"
              />
            </div>
            <div className="relative">
              <FaLock className="absolute top-1 left-2 text-gray-500" />
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 ml-7">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 pl-10 text-gray-700 focus:ring-primary focus:border-primary input-form-login"
              />
            </div>
            <div className="contenedor-form-editar-botones">
              <button type="submit" className="boton-form-login">
                Iniciar sesión
              </button>
            </div>
          </div>
        </form>
        <p className="form-login-sin_cuenta">
          ¿No tienes una cuenta?
          <Link to="/registro" className="link-registrarse"> Registrarte</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
