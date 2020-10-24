import React, { Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserListComponent from './UserListComponent';
 


class MainComponent extends Component{
    render(){
        return(
            <div className ="MainComponent">
                <Router>
                    <>
                    <Switch>
                    <Route path="/user" component={UserListComponent}/>

                    </Switch>
                    
                    </>
                </Router>
                
            </div>
        )
    }
}
export default MainComponent;