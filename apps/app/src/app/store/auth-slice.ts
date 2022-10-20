import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface AuthState {
  value: boolean;
}

const initialState: AuthState = {
  value: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setIsLoggedIn } = authSlice.actions;

export const selectAuthData = (state: RootState): boolean => state.auth.value;

export default authSlice.reducer;
