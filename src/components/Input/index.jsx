import PropTypes from 'prop-types';

function Input({ name, label, type, pattern }) {
  return (
    <div className='input-container' id={name}>
      <input type={type} required pattern={pattern} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

export default Input;

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf([
    'date',
    'datetime-local',
    'email',
    'month',
    'number',
    'password',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ]),
  pattern: PropTypes.string,
};
