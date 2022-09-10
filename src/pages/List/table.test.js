import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import render from '../../setupTests';
import Table from 'plaid-table';
import { payloadTest, payloadTest2 } from '../../features/employees.test';
import tableHeader from '../../data/tableHeader';

const payloads = [payloadTest, payloadTest2];

const setup = (employees) =>
  render(
    <Table title='Current employees' headers={tableHeader} body={employees} />
  );

describe('List page table', () => {
  it('Should have title display', () => {
    setup([]);
    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent('Current employees');
  });
  it('Should display No data at initialization', () => {
    setup([]);
    const table = screen.getByRole('table');
    expect(table).toHaveTextContent('No data');
  });
  it('Should display employees', () => {
    setup(payloads);
    const table = screen.getByRole('table');
    expect(table).toHaveTextContent('Valentin');
    expect(table).toHaveTextContent('Marie');
  });
});
