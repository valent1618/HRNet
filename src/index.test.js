import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import render from './setupTests';
import { Routes, Route } from 'react-router-dom';

import Create from './pages/Create';
import List from './pages/List';
import Error404 from './pages/404';

const setup = (path) =>
  render(
    <Routes>
      <Route path='/HRNet/' element={<Create />} />
      <Route path='/HRNet/list' element={<List />} />
      <Route path='/HRNet/*' element={<Error404 />} />
    </Routes>,
    { initialEntries: [path] }
  );

describe('Routes', () => {
  it('Should display Create page', () => {
    setup('/HRNet/');
    const main = screen.getByRole('main');
    expect(main).toHaveTextContent('Create');
  });
  it('Should display List page', () => {
    setup('/HRNet/list');
    const main = screen.getByRole('main');
    expect(main).toHaveTextContent('Current employees');
  });
  it('Should display Error404 page', () => {
    setup('/HRNet/abc');
    const main = screen.getByRole('main');
    expect(main).toHaveTextContent('Error 404');
  });
});
