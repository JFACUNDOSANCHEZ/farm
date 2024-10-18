// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import menuReducer from '../slices/menuSlice';
import provinciaReducer from '../slices/provinciaSlice'; // Importa el reducer de provincias
import condicionFiscalReducer from '../slices/condicionFiscalSlice';
import condicionDePagoSlice from '../slices/condicionDePago';
const store = configureStore({
  reducer: {
    auth: authReducer,
    menu: menuReducer,
    provincias: provinciaReducer, 
    condicionFiscal: condicionFiscalReducer,
    condicionPago: condicionDePagoSlice,
  },
});

export default store;
