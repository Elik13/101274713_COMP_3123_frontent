const axios = require("axios");

class EmployeeService {
  async getAll() {
    try {
      let axiosResponse = await axios.get(`/employees`);
      return axiosResponse.data;
    } catch (e) {
      console.error('Failed to get all the employes', e);
    }
  }
  
  async add(employee) {
    try {
      await axios.post(`/employees`,
        {...employee});
    } catch (e) {
      console.error('Failed to create new employee', e);
    }
  }
  
  async remove(id) {
    try {
      await axios.delete(`/employees/${id}`);
    } catch (e) {
      console.error(`Failed to remove user with ID: ${id}`, e);
    }
  }
  
  async modify(employee) {
    try {
      await axios.put(`/employees/${employee.id}`, {...employee})
    } catch (e) {
      console.error(`Failed to remove user with ID: ${employee.id}`, e);
    }
  }
}

module.exports = EmployeeService;