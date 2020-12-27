import React from 'react'
import store from './EmployeeStore'
import { saveEmployee } from './actions//EmpActions'
import { useState, useEffect } from 'react'
export const ManageEmp = () => {


    const [state, setstate] = useState([{
        Name: "",
        Age: "",
        Dept: "",
    }])


    useEffect(() => {
        debugger;
        console.log(state)
        setstate(store.getEMP())
        console.log(state)
    }, [])

    debugger


    return (

        < div >
            <table>
                {

                    (state) ? state.map(e => <tr><td> {e.Name} </td> <td>{e.Age}</td> <td>{e.Dept}</td></tr>) : ""

                }
            </table>
            <input type="Button" value="Add"></input>

        </div >
    )
}
