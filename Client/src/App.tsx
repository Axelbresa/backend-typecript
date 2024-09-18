import "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./components/register"
import Welcome from "./components/Welcome";
import Login from "./components/Login"
import Listado_producto from "./components/Listado_product";
import Add_producto from "./components/agregar_producto";
import Editar_producto from "./components/editar_producto";

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} /> 
      <Route path="/listado_productos" element={<Listado_producto />} />
      <Route path="/agregar_producto/:userId" element={<Add_producto />} /> 
      <Route path="/editar_producto/:id" element={<Editar_producto />} /> 
      </Routes>
    </Router>
  )
}

export default App
