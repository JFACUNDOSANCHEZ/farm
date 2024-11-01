// src/redux/slices/menuSlice.jsx
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// Define la función asíncrona para obtener los datos del menú

export const fetchMenuItems = createAsyncThunk('menu/fetchMenuItems', async (_, { getState }) => {
  const state = getState();
  const token = localStorage.getItem('token');
console.log(token);

const response = await axios.get('https://nube02.sytes.net:24082/api/Menu/Habilitados', {
  headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
  },
});
console.log(response.data);


  return response.data; // Devuelve el menú como un objeto JSON
});

// Define el slice
const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        // Define tus reducers aquí si es necesario
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMenuItems.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMenuItems.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Agrega los items del menú a la lista
                state.items = action.payload;
            })
            .addCase(fetchMenuItems.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

// Exporta los reducers y selectors necesarios
export const selectMenuItems = (state) => state.menu.items;
export const selectMenuStatus = (state) => state.menu.status;
export const selectMenuError = (state) => state.menu.error;

export default menuSlice.reducer;
