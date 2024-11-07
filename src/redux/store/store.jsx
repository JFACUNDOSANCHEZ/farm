// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import menuReducer from '../slices/menuSlice';
import provinciaReducer from '../slices/provinciaSlice';
import condicionFiscalReducer from '../slices/condicionFiscalSlice';
import condicionDePagoSlice from '../slices/condicionDePago';
import metodosReducer from '../slices/metodoSlice';
import clientesReducer from '../slices/clientesSlice'; 
import sectoresReducer from '../slices/sectoresSlice'; 
import usuariosReducer from '../slices/usuariosSlice'; 
import estadosOTReducer from '../slices/estadosOTSlice';
import matricesReducer from '../slices/matricesSlice'
import tiposReducer from '../slices/tiposSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    menu: menuReducer,
    provincias: provinciaReducer,
    condicionFiscal: condicionFiscalReducer,
    condicionPago: condicionDePagoSlice,
    metodos: metodosReducer,
    clientes: clientesReducer,       
    sectores: sectoresReducer,       
    usuarios: usuariosReducer,       
    estadosOT: estadosOTReducer,  
    matrices: matricesReducer,  
    tipos: tiposReducer
  },
});

export default store;

