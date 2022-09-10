import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import render from '../../setupTests';
import List from '.';

const setup = () => render(<List />);

describe('List page', () => {
  it('Should have title display', () => {
    setup();
    const main = screen.getByRole('main');
    expect(main).toHaveTextContent('Current employees');
  });
});
