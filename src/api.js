import axios from 'axios';
const jwtToken = localStorage.getItem("jwt");
const headers = {
     Authorization: jwtToken || false, 
   };
const api = axios.create({
     baseURL: "http://localhost:8080",
     headers: headers
});

export default api;
