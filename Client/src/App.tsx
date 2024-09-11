import "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./components/register"
import Login from "./components/Login"
import Soporte from "./components/Soporte";

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registro" element={<Register />} /> 
      <Route path="/soporte" element={<Soporte />} /> 
      </Routes>
    </Router>
  )
}

export default App
