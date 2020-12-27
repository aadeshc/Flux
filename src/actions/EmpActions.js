
import Dispatcher from '../AppDispatcher'


export function saveEmployee(employee) {

    debugger;
    // save your employee data through JSON here
    Dispatcher.dispatch({
        actionType: "Create",
        Employee: employee
    })
}