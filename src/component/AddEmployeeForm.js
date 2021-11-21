import React, {useState} from 'react'

const AddEmployeeForm = (props) => {
  // configuring the initial value to make sure the form is reset after the revisit
  const initialState = {id: '', firstName: '', lastName: '', email: ''};
  const [employee, setEmployee] = useState(initialState);
  const handleInputChange = (event) => {
    const {name, value} = event.target
    setEmployee({...employee, [name]: value})
  }
  
  const submit = (event) => {
    event.preventDefault();
    if (!employee.id || !employee.firstName || !employee.lastName || !employee.email) {
      console.warn('Invalid user input');
      return;
    }
    props.addEmployee(employee)
    setEmployee(initialState)
  }
  
  return (
    <form onSubmit={submit}>
      <label>ID</label>
      <input type="text"
             name="id"
             value={employee.id}
             onChange={handleInputChange}/>
      
      <label>First Name</label>
      <input type="text"
             name="firstName"
             value={employee.firstName}
             onChange={handleInputChange}/>
      
      <label>Last Name</label>
      <input type="text"
             name="lastName"
             value={employee.lastName}
             onChange={handleInputChange}/>
      
      <label>Email</label>
      <input type="text"
             name="email"
             value={employee.email}
             onChange={handleInputChange}/>
      <button>Add Employee</button>
    </form>
  )
}

export default AddEmployeeForm;