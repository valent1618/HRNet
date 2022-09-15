/**
 * Regex for name and accepts compound names, accents
 */
const PATTERN_NAME = {
  regex: '[A-zÜ-ü]{2,24}([ -]{1}[A-zÜ-ü]{1,24})?',
  message:
    'Accepts compound names (space or -), accents and leading capitals. Special characters are not allowed.',
};

export default PATTERN_NAME;
