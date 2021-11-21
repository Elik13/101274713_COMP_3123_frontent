import './App.css';
import EmployeeTable from "./component/EmployeeTable";
import {useEffect, useState} from "react";
import EmployeeService from './service/EmployeeService';

const employeeService = new EmployeeService();

// NOTE: functional component cannot be async
const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [employees, setEmployees] = useState([]);
  
  useEffect(() => {
    // use inner function to avoid async on the useEffect level
    const fetchData = async () => {
      setIsLoading(true);
      let result = await employeeService.getAllEmployees();
      setEmployees(result);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  
  return (
    <div className="container">
      <h1>Employee management system</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>New Employee</h2>
        </div>
        <div className="flex-large">
          <h2>View Employee</h2>
          {isLoading ? <div>Loading</div> : <EmployeeTable employees={employees}/>}
        </div>
      </div>
    </div>
  )
}
export default App;
