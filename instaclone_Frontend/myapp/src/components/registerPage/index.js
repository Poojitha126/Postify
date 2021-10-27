import react from "react";
import "./index.css";
import { Button } from 'react-bootstrap'


export default function registerPage(){
    const register=async e=>{
    try{
      e.preventDefault();
        
        const response = await fetch('http://localhost:5000/register', {
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
                name:e.target.name.value,
                email:e.target.email.value,
                password:e.target.password.value
            }) // body data type must match "Content-Type" header
          });
          
           // parses JSON response into native JavaScript objects
          window.location.href='/';
        }
    catch(e){
        console.log(e)
        alert("failed");
      }}
        
    
    return (<div className="login-container">
        <div className="login-box">
            <form onSubmit={e=>register(e)} className="_6lux">
              
                <input type="text" name="name" placeholder="Name"/>
              
              <input type="email" name="email" placeholder="Email Address"/>
              
              <input type="password" name="password" placeholder="Password"/>
              <Button type="submit" className="btn">Sign In</Button>
            </form>
        </div>
        </div>)}