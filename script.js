$(document).ready(onReady);



function onReady() {
    console.log ('ready to start'); }

            $(document).on('click', '#sumbitButton', addEmployee);
            $(document).on('click', '.deleteButton', onDelete);
    


    let employees = [];

function addEmployee() {

let firstNameInputs = $('#firstNameInputs').val();
let lastNameInputs = $('#lastNameInputs').val();
let employeeIDNumberInputs = $('#idNumberInputs').val();
let jobTitleInputs = $('#jobTitleInputs').val();
let annualSalaryInputs = $('#annualSalaryInputs').val();


let newEmployees = {
    firstName: firstNameInputs,
    lastName: lastNameInputs,
    employeeID: employeeIDNumberInputs,
    employeeTitle: jobTitleInputs,
    annualSalary: annualSalaryInputs
    
  }
//pushing the employees inside the array
employees.push(newEmployees);




}

