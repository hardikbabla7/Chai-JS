// User Account Information

const employeeId = 1001;
let employeeEmail = "rahul.sharma@company.com";
let employeePassword = "Rahul@123";
let employeeCity = "Delhi";
let employeeDepartment; // Value not assigned yet

// employeeId = 2001; // ❌ Not Allowed (const variables cannot be reassigned)

console.log(employeeId);

// Updating Employee Details
employeeEmail = "rahul.s@company.com";
employeePassword = "NewPassword@456";
employeeCity = "Bengaluru";

/*
Avoid using 'var' in modern JavaScript.

Reason:
- 'var' is function-scoped, which can lead to unexpected behavior.
- Prefer:
    const -> for values that never change.
    let   -> for values that can change.
*/

console.table({
  Employee_ID: employeeId,
  Email: employeeEmail,
  Password: employeePassword,
  City: employeeCity,
  Department: employeeDepartment,
});