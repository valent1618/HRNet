/**
 *
 * @param { {firstName: string, lastName: string, startDate: string, department: string , birthDate: string, street: string, city: string, state: string, zipCode: string}[] } employees of the store
 * @param { {firstName: string, lastName: string, birthDate: string} } toFind
 * @returns
 */
function findEmployee(employees, toFind) {
  return employees.find(
    (employee) =>
      employee.firstName === toFind.firstName &&
      employee.lastName === toFind.lastName &&
      employee.birthDate === toFind.birthDate
  );
}

export default findEmployee;
