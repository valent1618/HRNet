import PropTypes from 'prop-types';

import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';

/**
 * Custom select, label is by default same as name with an uppercase first letter
 * @component
 * @param { {name: string, label: string, options: Array} } Props
 * @returns
 */
function Select({ name, label = name, options }) {
  return (
    <div className='select'>
      <label htmlFor={name}>{capitalizeFirstLetter(label)} :</label>
      <select id={name} name={name} data-testid='select'>
        {options.map((option) => (
          <option key={name + option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;

Select.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
};
