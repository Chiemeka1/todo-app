import axios from 'axios'

class UserService{
    
    executeUserService(){
        return axios.get('http://localhost:8181/employee')
         //return axios.get("http://localhost:8080/communication")
         //console.log("Hello from Mars")
     }
}

export default new UserService()