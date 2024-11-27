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
import Matrices from './componentes/matrices/Matrices';
import Clientes from './componentes/clientes/Clientes';
import Tipos from './componentes/Tipos/Tipos';
import Unidades from './componentes/unidades/Unidades';
import Personal from './componentes/personal/Personal';


function App() {
  return (

    
    <Routes>
    
      <Route path="/" element={<Login />} />
      
    
      <Route path="/menu" element={<Layout><Principal /></Layout>} />
      <Route path="/ensayos" element={<Layout><Form /></Layout>} />
      <Route path="/provincias" element={<Layout><Provincias /></Layout>} />
      <Route path="/condicionFiscal" element={<Layout><CondicionFiscalComponent /></Layout>} />
      <Route path="/condicionDePago" element={<Layout><CondicionPagoComponent /></Layout>} />
      <Route path="/Metodos" element={<Layout><Metodos /></Layout>} />
      <Route path="/personal" element={<Layout><Personal /></Layout>} />
      <Route path="/sectores" element={<Layout><Sectores /></Layout>} />
      <Route path="/estadosOT" element={<Layout><EstadosOT /></Layout>} />
      <Route path="/matrices" element={<Layout><Matrices /></Layout>} />
      <Route path="/Clientes" element={<Layout><Clientes /></Layout>} />
      <Route path="/Tipos" element={<Layout><Tipos /></Layout>} />
      <Route path="/unidades" element={<Layout><Unidades /></Layout>} />
    </Routes>
  );
}

export default App;
