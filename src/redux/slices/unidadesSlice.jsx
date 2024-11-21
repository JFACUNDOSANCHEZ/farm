import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// AsyncThunk para obtener las unidades
export const fetchUnidades = createAsyncThunk('unidades/fetchUnidades', async (_, { getState }) => {
  const token = localStorage.getItem('token');
  
  try {
    const response = await axios.get('https://nube02.sytes.net:24082/api/Tablas/UnidadesMedida/Lista?oCodigo=""', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
    return response.data; // Devuelve la lista de unidades como un objeto JSON
  } catch (error) {
    console.error('Error fetching unidades:', error);
    throw error; // Lanza el error para que sea manejado en el rejected
  }
});

// Define el slice
const unidadesSlice = createSlice({
  name: 'unidades',
  initialState: {
    unidades: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    // Puedes agregar reducers si necesitas manejar otros estados relacionados
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUnidades.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUnidades.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Agrega las unidades al estado
        state.unidades = action.payload;
      })
      .addCase(fetchUnidades.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Exporta los reducers y selectors necesarios
export const selectUnidades = (state) => state.unidades.unidades;
export const selectUnidadesStatus = (state) => state.unidades.status;
export const selectUnidadesError = (state) => state.unidades.error;

export default unidadesSlice.reducer;
