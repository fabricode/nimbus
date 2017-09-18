import api_address from '../config'
import axios from 'axios'

const login = (username, password) => {
  let login_endpoint = `${api_address}/helloworld`
  debugger
  axios.get(login_endpoint, {
    auth: {
      username,
      password
    }
  })
  .then((response) => {
    debugger
    console.log(response)
  })
  .catch((error) => {
    debugger
    console.log(error)
  })
}

export default {
  login,
}
