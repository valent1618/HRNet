import { render as rtlRender } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './features/employees';

function render(ui, options) {
  const store = configureStore({
    reducer: {
      employees: employeesReducer,
    },
  });

  function Wrapper({ children }) {
    return (
      <MemoryRouter {...options}>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
    );
  }

  rtlRender(ui, { wrapper: Wrapper });
}

export default render;
