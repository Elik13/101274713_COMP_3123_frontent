const axios = require("axios");

const host = 'http://localhost:8081/api/v1';

class EmployeeService {
  async getAllEmployees() {
    try {
      let axiosResponse = await axios.get(`${host}/employees`);
      return axiosResponse.data;
    } catch (e) {
      console.error('Failed to get all the employes', e);
    }
  }
}

module.exports = EmployeeService;