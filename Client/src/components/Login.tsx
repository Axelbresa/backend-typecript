import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../stilos/Login.css"

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full grid grid-cols-1 gap-8 contenedor-form-login"> 
        <div className="space-y-6">
          <div className="text-center space-y-4 contactanos">
            <h2 className="text-3xl font-bold titulo-form-login"> 
              Iniciar sesión
            </h2>
          </div>
          <div className="space-y-4">
            <div className="relative">
              <FaEnvelope className="absolute top-1 left-2 text-gray-500" />
              <label htmlFor="correo_electronico" className="block text-sm font-medium text-gray-700 ml-7">
                Correo electrónico
              </label>
              <input
                id="correo_electronico"
                placeholder="Ingrese su correo electrónico"
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
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 pl-10 text-gray-700 focus:ring-primary focus:border-primary input-form-login"
              />
            </div>
            <div className="contenedor-form-editar-botones">
              <button className="boton-form-login">
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>
        <p className='form-login-sin_cuenta'>
          ¿No tienes una cuenta? 
          <Link to="/registro" className="link-registrarse"> Registrarte</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
