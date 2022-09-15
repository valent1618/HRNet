import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import render from '../../setupTests';
import List from '.';

const setup = () => render(<List />);

describe('List page', () => {
  setup();
  const main = screen.getByRole('main');
  const modal = screen.getByTestId('dialog');

  it('Should have title display', () => {
    expect(main).toHaveTextContent('Current employees');
  });
  it('Should have modal not open', () => {
    expect(modal).not.toHaveAttribute('open');
    expect(modal).toHaveTextContent('Do you want to delete');
  });
});
