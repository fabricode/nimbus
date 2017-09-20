import api_address from '../config';
import axios from 'axios';

const login = (username, password) => {
  let method = 'get'
  let url = `https://${api_address}/helloworld`
  let auth = {
    username,
    password
  }
  return axios({
    method,
    url,
    auth
  })
  .then(function(response){
      return {network_error: false, response}
  })
  .catch((error) => {
      return {network_error: true, error}
  })
}

export default {
  login,
}
