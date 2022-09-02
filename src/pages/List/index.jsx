import { useStore } from 'react-redux';

import tableHeader from '../../data/tableHeader';
import Table from 'plaid-table';

function List() {
  const store = useStore();
  const employees = store.getState().employees;

  return (
    <main id='List'>
      <Table
        title={'Current employees'}
        headers={tableHeader}
        body={employees}
      />
    </main>
  );
}

export default List;
