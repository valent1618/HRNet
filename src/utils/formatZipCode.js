function formatZipCode(code) {
  return String(code).padStart(5, '0');
}

export default formatZipCode;
