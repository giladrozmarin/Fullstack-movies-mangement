
import axios from 'axios'

export default  function authentication (userName,password) {



    axios.post(`http://localhost:3001/login`,{
        userName : userName,
        password : password
    })
}




