import { createReducer } from '@reduxjs/toolkit';
import mockData from '../MOCK_DATA.json';
import { addUserAction, deleteUsersAction } from './usersActions' // Assuming you've put the actions in userActions.ts

const initialState =  mockData;
const usersReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(addUserAction, (state, action) => {
        state.push(action.payload);
        console.log(action.payload);
        console.log('user added successfully');
      })
      .addCase(deleteUsersAction, (state, action) => {
        const idsToDelete = new Set(action.payload);
        return state.filter(user => !idsToDelete.has(user.id));
      });
  });
  

export default usersReducer;

