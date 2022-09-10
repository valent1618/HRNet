import PropTypes from 'prop-types';

/**
 * Custom input that shows you if it is valid or not
 * @component
 * @param { {name: string, label: string, type: ('date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week'), required: true, pattern: string, errorMessage: string, minLength: 3, maxLength: 50, min: 0, max: 1000000} } Props
 * @returns
 */
function Input({
  name,
  label,
  type,
  required = true,
  pattern,
  errorMessage,
  minLength = 3,
  maxLength = 50,
  min = 0,
  max = 1000000,
}) {
  return (
    <div className={`input-container ${name}`} data-testid='container'>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        min={type === 'number' ? min : undefined}
        max={type === 'number' ? max : undefined}
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
  min: PropTypes.number,
  max: PropTypes.number,
};
