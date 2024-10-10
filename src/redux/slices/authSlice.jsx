
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axiosConfig'; // Asegúrate de importar la configuración de Axios

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials) => {
  const response = await axiosInstance.post('/api/Login', credentials); // Usa la instancia de Axios

  // Guardar el token en localStorage
  localStorage.setItem('token', response.data.token);
  
  return response.data; // Debería devolver el token
});
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.token; // Guardar el token
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
