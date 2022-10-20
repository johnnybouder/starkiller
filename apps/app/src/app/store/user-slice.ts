import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/user';
import { RootState } from './store';

interface UserState {
  value: User | null;
}

const initialState: UserState = {
  value: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export const selectUserData = (state: RootState): User | null =>
  state.user.value;

export default userSlice.reducer;
