import { Routes, Route } from 'react-router-dom';
import Login from './componentes/login/Login';
import Principal from './componentes/Principal/Principal';
import Form from './componentes/form/Form';
import Provincias from './componentes/provincias/Provincias';
import CondicionFiscalComponent from './componentes/condicionFiscal/CondicionFiscal';
import CondicionPagoComponent from './componentes/condicionDePago/CondicionDePagoComponent';
import Layout from './componentes/layout/Layout'; // Importa el Layout

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
    </Routes>
  );
}

export default App;
