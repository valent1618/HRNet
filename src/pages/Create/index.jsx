import { useState } from 'react';
import { useStore } from 'react-redux';

import PATTERN_NAME from '../../utils/patternName';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Modal from '../../components/Modal';

import STATES from '../../data/states';
import DEPARTMENTS from '../../data/departments';

import { createEmployee } from '../../features/employees';

function Create() {
  const store = useStore();
  const [modalText, setModalText] = useState('Employee created !');

  return (
    <main id='Create'>
      <h2 className='glass-container'>Create Employee</h2>
      <form
        id='create-employee'
        onSubmit={(e) => createEmployee(e, store, setModalText)}
        className='glass-container'
      >
        <div className='flex-input'>
          <Input
            name='first-name'
            label='First Name'
            type='text'
            pattern={PATTERN_NAME}
          />
          <Input
            name='last-name'
            label='Last Name'
            type='text'
            pattern={PATTERN_NAME}
          />
        </div>

        <div className='flex-input'>
          <Input name='date-of-birth' label='Date of Birth' type='date' />
          <Input name='start-date' label='Start Date' type='date' />
        </div>

        <fieldset className='address'>
          <legend>Address</legend>

          <Input name='street' label='Street' type='text' />

          <Input name='city' label='City' type='text' maxLength={30} />

          <Input name='zip-code' label='Zip Code' type='number' max={99950} />

          <Select name='state' options={Object.values(STATES)} />
        </fieldset>

        <Select name='department' options={DEPARTMENTS} />

        <button>Create Employee</button>
      </form>
      <Modal
        text={modalText}
        links={[{ path: '/list', text: 'View current employees' }]}
      />
    </main>
  );
}

export default Create;
