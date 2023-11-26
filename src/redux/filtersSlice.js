import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    contactFilter: (state, action) => action.payload,
  },
});

export const { contactFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
