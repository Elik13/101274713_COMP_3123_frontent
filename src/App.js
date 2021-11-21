import './App.css';
import EmployeeTable from "./component/EmployeeTable";
import {useEffect, useState} from "react";
import EmployeeService from './service/EmployeeService';
import AddEmployeeForm from "./component/AddEmployeeForm";
import EditEmployeeForm from "./component/EditEmployeeForm";

const employeeService = new EmployeeService();

// NOTE: functional component cannot be async
const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [employees, setEmployees] = useState([]);
  const [reloadRequired, setReloadRequired] = useState(false);
  const [editing, setEditing] = useState(false)
  const initialState = {id: '', firstName: '', lastName: '', emailId: ''};
  const [currentEmployee, setCurrentUser] = useState(initialState)
  
  useEffect(() => {
    // use inner function to avoid async on the useEffect level
    const fetchData = async () => {
      setIsLoading(true);
      let result = await employeeService.getAll();
      setEmployees(result);
      setIsLoading(false);
      setReloadRequired(false);
    };
    fetchData();
    // useEffect will be called on each component mount + change of reloadRequired flag
  }, [reloadRequired]);
  
  const addNewEmployee = (employee) => {
    // decompose the object and add emailId field there
    employeeService.add({
        ...employee,
        emailId: employee.email
      }
    );
    setReloadRequired(true);
  }
  
  async function deleteEmployee(id) {
    await employeeService.remove(id);
    setReloadRequired(true);
  }
  
  const editEmployeeButtonAction = (employee) => {
    setCurrentUser(employee);
    setEditing(true);
  }
  
  async function editEmployee(employee) {
    await employeeService.modify(employee);
    setReloadRequired(true);
  }
  
  return (
    <div className="container">
      <h1>Employee management system</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
              <div>
                <h2>Edit Employee</h2>
                <EditEmployeeForm currentEmployee={currentEmployee} modifyEmployee={editEmployee} setEditing={setEditing}/>
              </div>
            ) :
            (
              <div>
                <h2>New Employee</h2>
                {/*pass service.add method reference as a param to the function to call is back when the form is submitted*/}
                <AddEmployeeForm addEmployee={addNewEmployee}/>
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>View Employee</h2>
          {isLoading ? <div>Loading</div> :
            <EmployeeTable employees={employees} deleteEmployee={deleteEmployee}
                           editEmployee={editEmployeeButtonAction}/>}
        </div>
      </div>
    </div>
  )
}
export default App;
