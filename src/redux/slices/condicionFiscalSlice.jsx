import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// Define un thunk para la petición GET
export const fetchCondicionFiscal = createAsyncThunk(
  'condicionFiscal/fetchCondicionFiscal',
  async () => {
    const token = localStorage.getItem('token'); // Obtén el token de localStorage
    if (!token) {
      throw new Error('Token no encontrado');
    }

    const response = await axios.get('https://nube02.sytes.net:24082/api/Tablas/CondicionFiscal/Lista', {
      headers: {
        'Authorization': `Bearer ${token}`, // Envía el token en el encabezado
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);

    return response.data; // Retorna los datos recibidos
  }
);

const condicionFiscalSlice = createSlice({
  name: 'condicionFiscal',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCondicionFiscal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCondicionFiscal.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload; // Guarda los datos en el estado
      })
      .addCase(fetchCondicionFiscal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Guarda el error
      });
  },
});

// Exporta el reducer
export default condicionFiscalSlice.reducer;
