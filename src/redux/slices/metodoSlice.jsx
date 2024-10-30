import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Definimos un thunk para la petición GET a la URL de "metodo"
export const fetchMetodos = createAsyncThunk(
  'metodos/fetchMetodos',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Token no encontrado');

      const response = await axios.get(
        'https://nube02.sytes.net:24082/api/Tablas/Metodos/Lista?oCodigo=""',
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

// Definimos un thunk para la petición POST a la URL de "metodo"
export const postMetodo = createAsyncThunk(
  'metodos/postMetodo',
  async (newData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Token no encontrado');

      const response = await axios.post(
        'https://nube02.sytes.net:24082/api/Tablas/metodo',
        newData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Creamos el slice "metodos"
const metodosSlice = createSlice({
  name: 'metodos',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Reducers para el thunk fetchMetodos (GET)
      .addCase(fetchMetodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMetodos.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchMetodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // Reducers para el thunk postMetodo (POST)
      .addCase(postMetodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postMetodo.fulfilled, (state, action) => {
        state.loading = false;
        state.list = [...state.list, action.payload];
      })
      .addCase(postMetodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

// Exporta el reducer
export default metodosSlice.reducer;
