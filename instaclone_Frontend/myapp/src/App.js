import PrivateRoute from "./PrivateRoute"
import './App.css';
import React from 'react';
// import axios from 'axios';
import { BrowserRouter as Router, Switch,Route,Link } from 'react-router-dom';
import LandingPage from './components/LandingPage/landing_page';


import Addpost from "./components/AddPost";
import Posts from "./components/PostView/post_view";
import RegisterPage from "./components/registerPage/index"
import UpdatePost from "./components/UpdatePost/index"
import DeletePost from "./components/deletePost/index"

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      
      <Router >
        <div>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <PrivateRoute exact path='/posts' component={Posts}/>
            <Route exact path='/AddPost' component={Addpost}/>
            <Route exact path='/register' component={RegisterPage}/>
            <Route exact path='/update' component={UpdatePost}/>
            <Route exact path='/delete' component={DeletePost}/>

            
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;
