
import React, {Component} from 'react'
import UserService from '../api/UserService'

export default class UserListComponent extends Component{

    constructor(props){
        super(props)
        this.state = {  
           users: 
           [
                
           ]     
         }  

    }
    componentDidMount(){
        UserService.executeUserService().then(
            Response =>{
                this.setState({users :Response.data})
            }
        )
    }
    render(){
        return(
            <div>
               <h1>list Users</h1>
               <table>
                   <thead>
                       <tr>
                           <th>id</th>
                           <th>name</th>
                           <th>address</th>
                           <th>salary</th>
                           
                           
                       </tr>
                   </thead>
                   <tbody>
                       {
                           this.state.users.map(
                           user =>
                         <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.address}</td>
                            <td>{user.salary}</td>
                            
                         </tr>  
                         )
                       }
                   </tbody>
               </table>
               <a href="/welcome">bact to welcome page</a>
            </div>
        )
    }
}