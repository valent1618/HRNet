import PropTypes from 'prop-types';

/**
 * Custom input that shows you if it is valid or not
 * @component
 * @param { {name: string, label: string, type: ('date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week'), required: true, pattern: string, errorMessage: string, minLength: (number | string), maxLength: (number | string), min: (number | string), max: (number | string)} } Props
 * @returns
 */
function Input({
  name,
  label,
  type,
  required = true,
  pattern,
  errorMessage,
  minLength,
  maxLength,
  min,
  max,
}) {
  const typesString = ['email', 'password', 'search', 'tel', 'text', 'url'];

  return (
    <div className={`input-container ${name}`} data-testid='container'>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        pattern={pattern}
        minLength={typesString.includes(type) ? minLength : undefined}
        maxLength={typesString.includes(type) ? maxLength : undefined}
        min={!typesString.includes(type) ? min : undefined}
        max={!typesString.includes(type) ? max : undefined}
        data-testid='input'
        onInvalid={
          errorMessage
            ? (e) => e.target.setCustomValidity(errorMessage)
            : undefined
        }
        onInput={
          errorMessage ? (e) => e.target.setCustomValidity('') : undefined
        }
      />
      <label htmlFor={name} data-testid='label'>
        {label}
      </label>
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
  required: PropTypes.bool,
  pattern: PropTypes.string,
  errorMessage: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
