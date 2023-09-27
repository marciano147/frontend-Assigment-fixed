import { GridRowSelectionModel } from '@mui/x-data-grid';
import { createAction } from '@reduxjs/toolkit';

export enum UserActionTypes {
    ADD_USER = 'users/addUser',
    DELETE_USERS = 'users/deleteUsers',
}

export type User = {
    id?: number;
    fullName: string;
    email: string;
    department: string; 
    lastLogin?: string | number | Date;
    actions: string;
  };



export const addUserAction = createAction<any>(UserActionTypes.ADD_USER);

export const deleteUsersAction = createAction<GridRowSelectionModel>(UserActionTypes.DELETE_USERS);
