import React, {useState} from 'react'

const EditEmployeeForm = (props) => {
  const [employee, setEmployee] = useState(props.currentEmployee)
  
  const handleInputChange = (event) => {
    // two new variables creation - name = nameOfInoutField, value = value
    const {name, value} = event.target;
    // update the property of the employee that has a name as input field and value from input
    setEmployee({...employee, [name]: value});
  }
  
  const submit = (event) => {
    event.preventDefault()
    props.modifyEmployee(employee)
  };
  
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
             value={employee.emailId}
             onChange={handleInputChange}/>
      <button>Edit Employee</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditEmployeeForm;