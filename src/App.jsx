import { Routes, Route } from 'react-router-dom';
import Login from './componentes/login/Login';
import Principal from './componentes/Principal/Principal';
import Form from './componentes/form/Form';
import Provincias from './componentes/provincias/Provincias';
import CondicionFiscalComponent from './componentes/condicionFiscal/CondicionFiscal';
import CondicionPagoComponent from './componentes/condicionDePago/CondicionDePagoComponent';
import Layout from './componentes/layout/Layout'; // Importa el Layout
import NavBar from './componentes/nav/Nav';
import './App.css';
import Metodos from './componentes/metodo/Metodos';
import Usuarios from './componentes/Usuarios/Usuarios';
import Sectores from './componentes/sectores/Sectores';
import EstadosOT from './componentes/estados/EstadosOT';


function App() {
  return (

    
    <Routes>
      {/* Página de login, sin el menú */}
      <Route path="/" element={<Login />} />
      
      {/* Rutas con el menú y nav dentro del Layout */}
      <Route path="/menu" element={<Layout><Principal /></Layout>} />
      <Route path="/ensayos" element={<Layout><Form /></Layout>} />
      <Route path="/provincias" element={<Layout><Provincias /></Layout>} />
      <Route path="/condicionFiscal" element={<Layout><CondicionFiscalComponent /></Layout>} />
      <Route path="/condicionDePago" element={<Layout><CondicionPagoComponent /></Layout>} />
      <Route path="/Metodos" element={<Layout><Metodos /></Layout>} />
      <Route path="/usuarios" element={<Layout><Usuarios /></Layout>} />
      <Route path="/sectores" element={<Layout><Sectores /></Layout>} />
      <Route path="/estadosOT" element={<Layout><EstadosOT /></Layout>} />
    </Routes>
  );
}

export default App;
