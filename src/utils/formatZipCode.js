/**
 * Add 0 if zip code length is not 5
 * @param { number } code
 * @returns
 */
function formatZipCode(code) {
  return String(code).padStart(5, '0');
}

export default formatZipCode;
