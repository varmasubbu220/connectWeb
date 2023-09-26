import jwtDecode from 'jwt-decode';
const DecodeJwt=async(jwt)=>{
    const secretkey="dcbuygecyesg";
  
 let decoded = await jwtDecode(jwt, secretkey);
  return decoded;

}
export default DecodeJwt;