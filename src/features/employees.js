import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'user',
  initialState: { employees: [] },
  reducers: {
    add: (state, action) => {
      state.employees.push(action.payload);
      return;
    },
    remove: (state, action) => {
      state.employees.splice(action.payload, 1);
      return;
    },
  },
});

export const { add, remove } = actions;
export default reducer;
