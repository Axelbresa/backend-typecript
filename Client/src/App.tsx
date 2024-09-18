import "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./components/register"
import Welcome from "./components/Welcome";
import Login from "./components/Login"
import Listado_producto from "./components/Listado_product";

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} /> 
      <Route path="/listado_productos" element={<Listado_producto />} />
      <Route path="/agregar_producto" element={<Listado_producto />} /> 
      </Routes>
    </Router>
  )
}

export default App
