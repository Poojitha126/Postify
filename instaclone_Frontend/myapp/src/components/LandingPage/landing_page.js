import React from 'react'
import './landing_page.css'

import { Button } from 'react-bootstrap'
import { setToken } from '../../utils/authOperation';
import  history  from '../../utils/history';
import { WindowSidebar } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


export default function LandingPage(){
    const login=async e=>{
    try{
      e.preventDefault();
        
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({
                email:e.target.email.value,
                password:e.target.password.value
            }) // body data type must match "Content-Type" header
          });
          const {data}=await response.json();
          setToken(data.token); // parses JSON response into native JavaScript objects
          window.location.href='/posts';
        }
    catch(e){
        console.log(e)
        alert("failed");
      }}
        
    
    return (<div className="login-container">
        <div className="login-box">
            <form onSubmit={e=>login(e)} className="_6lux">
              
              <input type="email" name="email" placeholder="Email Address"/>
              
              <input type="password" name="password" placeholder="Password"/>
              <Button type="submit" className="btn" onclick="alert('login successful')">Login</Button>
              <Link to='/register'> To SignUp </Link>
              
            </form>
        </div>
        </div>)}
        
        // {/* <div className="container">
        //     <div className="row justify-content-md-center pt-5">
        //         <div className="col-md-3">
        //             <img src={Capture} alt="LandingImg"></img>

        //         </div>
        //         <div className="col-md-3 align-middle text-center">
        //             <h1>10X Team</h1>
        //             <Link to={'/postview'} className="btn btn-success">Enter</Link>
        //         </div>
        //     </div>
        // </div> */}