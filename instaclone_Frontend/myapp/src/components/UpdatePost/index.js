import React,{useState} from "react";
import {getToken} from "../../utils/authOperation";
import {Button} from "react-bootstrap";
import {Redirect} from "react-router-dom";
import { useLocation } from "react-router";
import "./index.css";


function UpdatePost(){
    
    const location = useLocation();
    const id=location.state.userid._id;
    const Url=`http://localhost:5000/posts/${id}`
    const updatePost=async e=>{
        e.preventDefault();
        const response=await fetch(Url,{
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json',
              // 'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization':`Bearer ${getToken()}`
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body:JSON.stringify({
                name:e.target.name.value,
                location:e.target.name.location,
                body:e.target.name.body,
                image:e.target.name.value
            })

        });

        window.location.href="/posts"}

        

    
    return <div className="Addpost">
        < div className="addform">
            <form onSubmit={e=>{updatePost(e)}} className="form_css">
                
                
                <input className='addlocation' name="location" placeholder='Location' type="text" />
                <input className='adddesc' name="description" placeholder='Description' type="text" />
                <Button type="submit" className='postbtn' >Post</Button>
                </form>
            </div>
</div>}


export default UpdatePost;