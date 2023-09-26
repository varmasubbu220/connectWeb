const jwtDecode = require('jwt-decode');
require("dotenv").config();
const decodeJwt = (jwt) => {
  const secretKey = process.env.JWT_KEY;

  try {
    const decoded = jwtDecode(jwt, secretKey);
    return decoded;
  } catch (error) {
    console.error("Error decoding JWT:", error.message);
    return null;
  }
};

module.exports = decodeJwt;
