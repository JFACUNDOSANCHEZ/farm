import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define un thunk para la petición GET de Condición de Pago
export const fetchCondicionPago = createAsyncThunk(
  'condicionPago/fetchCondicionPago',
  async () => {
    const token = localStorage.getItem('token'); // Obtén el token de localStorage
    if (!token) {
      throw new Error('Token no encontrado');
    }

    const response = await axios.get('https://nube02.sytes.net:24082/api/Tablas/CondicionPago/Lista?oCodigo=""', {
      headers: {
        'Authorization': `Bearer ${token}`, // Envía el token en el encabezado
        'Content-Type': 'application/json',
      },
    });
console.log(response.data);

    return response.data; // Retorna los datos recibidos
  }
);

const condicionPagoSlice = createSlice({
  name: 'condicionPago',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCondicionPago.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCondicionPago.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload; // Guarda los datos en el estado
      })
      .addCase(fetchCondicionPago.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Guarda el error en caso de fallo
      });
  },
});

// Exporta el reducer
export default condicionPagoSlice.reducer;
