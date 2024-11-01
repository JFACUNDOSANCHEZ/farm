import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk para la petición GET a la URL de "EstadosOT"
export const fetchEstadosOT = createAsyncThunk(
  'estadosOT/fetchEstadosOT',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Token no encontrado');

      const response = await axios.get(
        'https://nube02.sytes.net:24082/api/Tablas/EstadosOT/Lista?oCodigo=""',
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

// Slice de "EstadosOT"
const estadosOTSlice = createSlice({
  name: 'estadosOT',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEstadosOT.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEstadosOT.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchEstadosOT.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

// Exporta el reducer
export default estadosOTSlice.reducer;
