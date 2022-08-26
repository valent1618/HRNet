import PropTypes from 'prop-types';

function Input({
  name,
  label,
  type,
  pattern,
  minLength = 3,
  maxLength = 50,
  min = 0,
  max = 1000000,
}) {
  return (
    <div className={`input-container ${name}`}>
      <input
        id={name}
        type={type}
        required
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        min={type === 'number' ? min : undefined}
        max={type === 'number' ? max : undefined}
      />
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
    'search',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ]),
  pattern: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
};
