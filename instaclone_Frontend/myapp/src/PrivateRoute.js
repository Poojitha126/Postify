import { Component } from "react";
import {Route, Redirect} from "react-router-dom";
import {isAuthenticated} from "./utils/authOperation"
const PrivateRoute =({component:Component,...rest})=>(
    <Route
    {...rest}
    render={props=>(
        isAuthenticated()?(<Component key={props.location} {...props}/>)
        :(<Redirect to={{pathname:"/",state:{from:props.location}}}/>)
        )}/>
    );
export default PrivateRoute;
