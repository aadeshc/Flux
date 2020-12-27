import React, { Component } from 'react'
import store from './EmployeeStore'
import * as EmpActions from './actions/EmpActions'


export default class AddEmp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Name: "",
            Age: "",
            Dept: "",
        }
    }

    handleSubmit = () => {
        debugger
        EmpActions.saveEmployee(this.state)

    }
    render() {
        return (
            <div>
                <h4> Add new Employee</h4>

                <form>

                    Name : <input type="text" id="txtName" onChange={(e) => this.setState({ Name: e.target.value })}></input> <br />
                    Age : <input type="text" id="txtAge" onChange={(e) => this.setState({ Age: e.target.value })}></input> <br></br>
                    <br />

                    Dept : <input type="text" id="txtDept" onChange={e => this.setState({ Dept: e.target.value })}></input>
                    <br />
                    <input type="Button" value="Submit" onClick={this.handleSubmit}></input>
                </form>
            </div>
        )
    }
}
