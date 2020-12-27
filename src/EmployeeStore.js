import { EventEmitter } from 'events'
import { act } from 'react-dom/test-utils'
import Dispatcher from './AppDispatcher'


let Employee = [
    {
        Name: "Aadesh",
        Dept: "Softwate Dev",
        Age: 30
    },
    {
        Name: "Ashutosh",
        Dept: "Marketing",
        Age: 31
    },
    {
        Name: "Pranesh",
        Dept: "Finanace",
        Age: "25"
    },
]
class CourseStore extends EventEmitter {


    addChangeListener(callback) {
        this.on("change", callback)
    }

    removeChangeListener(callback) {
        this.removeChangeListener("change", callback)
    }

    emitChange() {
        this.emit("change")
    }


    getEMP() {
        return Employee
    }

}


const store = new CourseStore()

debugger;
Dispatcher.register((action) => {

    if (action.type == "Create") {
        Employee.push(action.Employee)
        debugger;
        store.emitChange();

    } else {
        store.getEMP()
    }

})
export default store