import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define un thunk para la petición GET de Matrices
export const fetchMatrices = createAsyncThunk(
  'matrices/fetchMatrices',
  async () => {
    const token = localStorage.getItem('token'); // Obtén el token de localStorage
    if (!token) {
      throw new Error('Token no encontrado');
    }

    const response = await axios.get('https://nube02.sytes.net:24082/api/Tablas/Matrices/Lista?oCodigo=""', {
      headers: {
        'Authorization': `Bearer ${token}`, // Envía el token en el encabezado
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);

    return response.data; // Retorna los datos recibidos
  }
);

const matricesSlice = createSlice({
  name: 'matrices',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatrices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMatrices.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload; // Guarda los datos en el estado
      })
      .addCase(fetchMatrices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Guarda el error en caso de fallo
      });
  },
});

// Exporta el reducer
export default matricesSlice.reducer;
