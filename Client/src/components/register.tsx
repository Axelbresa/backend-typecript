import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'; 
import "../stilos/registro.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas no coinciden',
      });
      return;
    }

    const requestBody = {
      username,
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:3100/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: '¡Registro exitoso!',
          text: 'Tu cuenta ha sido creada con éxito',
          confirmButtonText: 'Continuar',
        }).then(() => {
          navigate("/login"); // Redirige después de cerrar la alerta
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: data.message || 'Error al registrar usuario',
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
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full grid grid-cols-1 gap-8 contenedor-form-registro">
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="text-center space-y-4 contactanos">
            <h2 className="text-3xl md:text-3xl font-bold titulo-form-register">
              Crear una cuenta
            </h2>
          </div>
          <div className="space-y-4">
            <div className="relative">
              <FaUser className="absolute top-1 left-2 text-gray-500" />
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 ml-7">
                Username
              </label>
              <input
                id="username"
                placeholder="Ingrese su nombre completo"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 pl-10 text-gray-700 focus:ring-primary focus:border-primary input-form-registro"
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute top-1 left-2 text-gray-500" />
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 ml-7">
                Correo electrónico
              </label>
              <input
                id="email"
                placeholder="Ingrese su correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 pl-10 text-gray-700 focus:ring-primary focus:border-primary input-form-registro"
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
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 pl-10 text-gray-700 focus:ring-primary focus:border-primary input-form-registro"
              />
            </div>
            <div className="relative">
              <FaLock className="absolute top-1 left-2 text-gray-500" />
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 ml-7">
                Confirmar contraseña
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirme su contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 pl-10 text-gray-700 focus:ring-primary focus:border-primary input-form-registro"
              />
            </div>

            <div className="contenedor-form-editar-botones">
              <button type="submit" className="boton-form-register">
                Registrarse
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
