import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk para la petición GET a la URL de "Usuarios"
export const fetchUsuarios = createAsyncThunk(
  'usuarios/fetchUsuarios',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Token no encontrado');

      const response = await axios.get(
        'https://nube02.sytes.net:24082/api/Sistema/Usuarios/Lista?oCodigo=""',
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data);
      
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice de "Usuarios"
const usuariosSlice = createSlice({
  name: 'usuarios',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsuarios.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsuarios.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchUsuarios.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

// Exporta el reducer
export default usuariosSlice.reducer;
