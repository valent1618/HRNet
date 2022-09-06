import { createSlice } from '@reduxjs/toolkit';

import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';
import formatZipCode from '../utils/formatZipCode';
import findEmployee from '../utils/findEmployee';
import { openModal, closeModal } from '../utils/handleModal';
import getObjKey from '../utils/getObjKey';
import STATES from '../data/states';

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

/**
 * Adds an employee to the store if it does not already exist
 * @param { Object } e Event of onSubmit
 * @param { Object } store Redux store
 * @param { Function } setModalText set of useState modalText
 */
export function createEmployee(e, store, setModalText) {
  e.preventDefault();
  const firstName = capitalizeFirstLetter(e.target[0].value);
  const lastName = capitalizeFirstLetter(e.target[1].value);
  const dateBirth = e.target[2].value;
  const startDate = e.target[3].value;
  const street = e.target[5].value;
  const city = capitalizeFirstLetter(e.target[6].value);
  const zipCode = formatZipCode(e.target[7].value);
  const state = getObjKey(STATES, e.target[8].value);
  const department = e.target[9].value;

  const employees = store.getState().employees;
  const toFind = { firstName, lastName, dateBirth };

  if (findEmployee(employees, toFind)) {
    setModalText('Employee already exist...');
  } else {
    setModalText('Employee created !');
    const payload = {
      firstName,
      lastName,
      startDate,
      department,
      dateBirth,
      street,
      city,
      state,
      zipCode,
    };
    store.dispatch(add(payload));
  }

  e.target.reset();
  openModal();
}

/**
 * Remove employee of the store
 * @param { {firstName: string, lastName: string, dateBirth: string} } toRemove
 * @param { Object } store Redux store
 */
export function removeEmployee(toRemove, store) {
  const employees = store.getState().employees;
  const indexToRemove = employees.indexOf(findEmployee(employees, toRemove));

  store.dispatch(remove(indexToRemove));

  closeModal();
}
