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
}

module.exports = EmployeeService;