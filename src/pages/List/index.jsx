import { useStore, useSelector } from 'react-redux';
import { employees } from '../../app/selectors';
import { useState, useEffect } from 'react';

import tableHeader from '../../data/tableHeader';
import Table from 'plaid-table';
import Modal from '../../components/Modal';

import eventRemove from './eventRemove';
import { removeEmployee } from '../../features/employees';
import { closeModal } from '../../utils/handleModal';

function List() {
  const store = useStore();
  const employeesRedux = useSelector(employees);

  const [toRemove, setToRemove] = useState('');

  useEffect(() => {
    employeesRedux.length > 0 && eventRemove(setToRemove);
  }, [employeesRedux]);

  return (
    <main id='List'>
      <Table
        title='Current employees'
        headers={tableHeader}
        body={employeesRedux}
      />
      <Modal
        text={`Do you want to delete ${toRemove.firstName} ?`}
        buttons={[
          { action: () => removeEmployee(toRemove, store), text: 'Yes' },
          { action: () => closeModal(), text: 'No' },
        ]}
      />
    </main>
  );
}

export default List;
