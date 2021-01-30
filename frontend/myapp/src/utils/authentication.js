
import axios from 'axios'

export default  function authentication (userName,password) {



   return axios.post(`/menu/login`,{
        userName : userName,
        password : password
    })
}




