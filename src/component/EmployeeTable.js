import React from 'react';

const EmployeeTable = (props) => (
  <table>
    <thead>
    <tr>
      <th>Id</th>
      <th>First name</th>
      <th>Last name</th>
      <th>Email</th>
    </tr>
    </thead>
    <tbody>
    {props.employees.length > 0 ? (
      props.employees.map((employee) => (
        <tr>
          <td>{employee.id}</td>
          <td>{employee.firstName}</td>
          <td>{employee.lastName}</td>
          <td>{employee.emailId}</td>
          <td>
            <button className="button muted-button">Edit</button>
            <button className="button muted-button">Delete</button>
          </td>
        </tr>
      ))) : (
      <tr>
        <td colSpan={3}>No employees found</td>
      </tr>
    )
    }
    </tbody>
  </table>
)

export default EmployeeTable;