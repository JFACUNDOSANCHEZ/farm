import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk para la petición GET a la URL de "Sectores"
export const fetchSectores = createAsyncThunk(
  'sectores/fetchSectores',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Token no encontrado');

      const response = await axios.get(
        'https://nube02.sytes.net:24082/api/Tablas/Sectores/Lista?oCodigo=""',
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

// Slice de "Sectores"
const sectoresSlice = createSlice({
  name: 'sectores',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSectores.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSectores.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchSectores.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

// Exporta el reducer
export default sectoresSlice.reducer;
