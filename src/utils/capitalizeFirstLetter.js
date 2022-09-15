/**
 * Capitalize the first letter of a string
 * @param { string } string
 * @returns { string }
 */
function capitalizeFirstLetter(string) {
  const lowerString = string.toLowerCase();
  return lowerString.charAt(0).toUpperCase() + lowerString.slice(1);
}

export default capitalizeFirstLetter;
