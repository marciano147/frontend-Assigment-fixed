import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import mockData from '../MOCK_DATA.json';

const usersSlice = createSlice({
  name: 'users',
  initialState: mockData,
  reducers: {
    addUser: (state, action: PayloadAction<any>) => {
      state.push(action.payload);
      console.log(action.payload);
      console.log('user added successfully');
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      return state.filter(user => user.id !== action.payload);
    },
  },
});

export const { addUser, deleteUser } = usersSlice.actions;
export usersSlice.reducer;
