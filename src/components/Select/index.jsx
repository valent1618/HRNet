import PropTypes from 'prop-types';

import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';

/**
 * Custom select
 * @component
 * @param { {name: string, options: Array} } Props
 * @returns
 */
function Select({ name, options }) {
  return (
    <div className='select' id={name}>
      <label htmlFor={name}>{capitalizeFirstLetter(name)} :</label>
      <select name={name}>
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
