/**
 * Get object key from value
 * @param { Object } obj
 * @param {*} value
 * @returns
 */
function getObjKey(obj, value) {
  return Object.keys(obj).find((key) => obj[key] === value);
}

export default getObjKey;
