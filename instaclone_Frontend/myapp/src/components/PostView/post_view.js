import { useEffect, useState } from "react";
import { getToken } from "../../utils/authOperation";
import Post from "../Post/index";
import "./post_view.css";

import {Link} from 'react-router-dom';
import camera from '../../assets/camera.png' 
import icon from '../../assets/icon.png' 

function Posts(){
    const [Posts,setPosts]=useState([]);
    async function getData(){
        try{
            const response=await fetch("http://localhost:5000/posts",{
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization':`Bearer ${getToken()}`,
                    },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-ur
            });
            const {data}= await response.json();
            
            console.log(data.posts);
            setPosts(data.posts.reverse());
        }catch(e){
            console.log(e)
        };
    }
    useEffect(()=>{ getData(); }, []); //component did mount
    return (
        <div>
            <div className="header">
              <nav className="nav  navbar-light bg-light justify-content-between">
                  <img className="icon" src={icon} alt="icon" ></img>
                  <h1 Style="padding:2px">Instaclone</h1>
                  
                  <a href='/addpost'><img className="camera" src={camera} alt="camera" ></img></a>
              </nav>
            </div>
            <div className='container'>
            {/* <Link to='/addpost'> add post </Link> */}
            {/* <h2>INSTACLONE</h2> */}
            
            <div className="posts" >
                {Posts.map(post=>
                  <Post key={post._id} {...post} />    
                )}
            </div>
        </div>
        </div>
    )
}
export default Posts;