import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import render from '../../setupTests';
import Navigation from '.';

const setup = (path) => {
  render(<Navigation />, { initialEntries: [path] });
};

describe('Navigation', () => {
  it('Should hide when location is random', () => {
    setup('/abc');
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('hide');
  });
  it('Should display right link when location is create', () => {
    setup('/HRNet/');
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('right');
  });
  it('Should display left link when location is list', () => {
    setup('/HRNet/list');
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('left');
  });
});
