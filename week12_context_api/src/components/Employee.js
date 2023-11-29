import React, { Component } from 'react'
import EmployeeContext from '../EmployeeContext'

export default class Employee extends Component {
    static contextType = EmployeeContext
    
    componentDidMount() {
        console.log(this.context)
    }

    render() {
    return (
      <div>
        <h3>Employee Class (contexType)</h3>
        <p>Employee ID: {this.context.eid}</p>
        <p>Employee Name: {this.context.display()}</p>
        <p>Employee Salary: {this.context.salary}</p>
      </div>
    )
  }
}