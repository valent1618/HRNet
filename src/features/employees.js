import { createSlice } from '@reduxjs/toolkit';

import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';

const { actions, reducer } = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
      return;
    },
    remove: (state, action) => {
      state.splice(action.payload, 1);
      return;
    },
  },
});

export const { add, remove } = actions;
export default reducer;

export function createEmployee(e, store) {
  e.preventDefault();
  const firstName = capitalizeFirstLetter(e.target[0].value);
  const lastName = capitalizeFirstLetter(e.target[1].value);
  const dateBirth = e.target[2].value;
  const startDate = e.target[3].value;
  const street = e.target[5].value;
  const city = capitalizeFirstLetter(e.target[6].value);
  const zipCode = e.target[7].value;
  const state = e.target[8].value;
  const department = e.target[9].value;

  const employees = store.getState().employees;

  const alreadyExist = employees.find(
    (employee) =>
      employee.firstName === firstName &&
      employee.lastName === lastName &&
      employee.dateBirth === dateBirth
  );

  if (alreadyExist) {
    console.log('Employee already exist !');
  } else {
    const payload = {
      firstName,
      lastName,
      dateBirth,
      startDate,
      street,
      city,
      zipCode,
      state,
      department,
    };
    store.dispatch(add(payload));
  }
}
