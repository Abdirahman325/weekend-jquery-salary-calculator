$(document).ready(onReady);



function onReady() {
    console.log ('ready to start');{

            $(document).on('click', '#sumbitButton', addEmployee);
            $(document).on('click', '.deleteButton', onDelete);
    }
}