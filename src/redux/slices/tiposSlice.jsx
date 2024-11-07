
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchTipos = createAsyncThunk('tipos/fetchTipos', async (_, { getState }) => {
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
const tiposSlice = createSlice({
  name: 'tipos',
  initialState: {
    tipos: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    // Aquí puedes agregar reducers si lo necesitas
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTipos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTipos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Agrega las provincias a la lista
        state.tipos = action.payload;
      })
      .addCase(fetchTipos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Exporta los reducers y selectors necesarios
export const selectTipos = (state) => state.tipos.tipos;
export const selectTiposStatus = (state) => state.tipos.status; 
export const selectTiposError = (state) => state.tipos.error;   
export default tiposSlice.reducer;