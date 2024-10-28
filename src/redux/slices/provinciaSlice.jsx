// src/redux/slices/provinciasSlice.jsx
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define la función asíncrona para obtener los datos de las provincias
export const fetchProvincias = createAsyncThunk('provincias/fetchProvincias', async (_, { getState }) => {
  const token = localStorage.getItem('token');
  
  const response = await axios.get('https://nube02.sytes.net:24082/api/Tablas/Provincias/Lista?oCodigo=""', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
console.log(response.data);

  return response.data; // Devuelve la lista de provincias como un objeto JSON
});

// Define el slice
const provinciaSlice = createSlice({
  name: 'provincias',
  initialState: {
    provincias: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    // Aquí puedes agregar reducers si lo necesitas
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProvincias.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProvincias.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Agrega las provincias a la lista
        state.provincias = action.payload;
      })
      .addCase(fetchProvincias.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Exporta los reducers y selectors necesarios
export const selectProvincias = (state) => state.provincias.provincias;
export const selectProvinciasStatus = (state) => state.provincias.status;
export const selectProvinciasError = (state) => state.provincias.error;

export default provinciaSlice.reducer;
