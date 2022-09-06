/**
 *
 * @param { {firstName: string, lastName: string, dateBirth: string}[] } employees of the store
 * @param { {firstName: string, lastName: string, dateBirth: string} } toFind
 * @returns
 */
function findEmployee(employees, toFind) {
  return employees.find(
    (employee) =>
      employee.firstName === toFind.firstName &&
      employee.lastName === toFind.lastName &&
      employee.dateBirth === toFind.dateBirth
  );
}

export default findEmployee;
