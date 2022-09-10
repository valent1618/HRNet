/**
 * Regex for name, accepts compound names, accents, leading capitals only
 */
const PATTERN_NAME = {
  regex: '([A-Z]{1})?[a-zÜ-ü]{2,24}([ -]{1}([A-Z]{1})?[a-zÜ-ü]{1,24})?',
  message:
    'Accepts compound names (space or -), accents and leading capitals. Special characters are not allowed.',
};

export default PATTERN_NAME;
