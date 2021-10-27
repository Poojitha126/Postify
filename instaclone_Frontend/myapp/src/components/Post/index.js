import "./index.css"

import share from "../../assets/share.png"
import heart from "../../assets/heart.png";
import { Link } from 'react-router-dom';
import React,{useState} from "react";
import { useLocation } from "react-router";
import {getToken} from "../../utils/authOperation";

function Post({_id,name,location,image,body,date,likedusers,user}){
    const postid=_id;
    const userid=user;
    const likers=likedusers.length
    const [liked,setLiked]=useState(false)
    const [total,setTotal]=useState(likers)
    const [style,setStyle]=useState('blackheart')
   
    const url=`http://localhost:5000/posts/${_id}/like`
        console.log(url)
    const like = async ()=>{
        const response = await fetch(url,{
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer ${getToken()}`
                },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({
            Id:userid
        })// body data type must match "Content-Type" header
    });
    const Data = await response.json()
    setTotal(Data.data.post.likedusers.length)
    }
    const url2=`http://localhost:5000/posts/${_id}/unlike`
        console.log(url)
    const unlike = async ()=>{
        const response = await fetch(url2,{
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer ${getToken()}`
                },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({
            Id:userid
        })// body data type must match "Content-Type" header
    });
    const Data=await response.json()
    setTotal(Data.data.post.likedusers.length)
    }
    function likeUpdate(postid){
        console.log(postid)
        if(liked){
            setLiked(!liked)
            setStyle('redheart')
            unlike();
        }
        else{
            setLiked(!liked)
            setStyle('blackheart')
            like();
        }
    }
    const Date=date.toString()
    const month={'01':'Jan','02':'Feb','03':'Mar','04':'Apr','05':'May','06':'Jun','07':'Jul','08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'}
    const updatedDate=Date.slice(8,10)+' '+month[Date.slice(5,7)]+' '+Date.slice(0,4)
   
    
    
    
    return (<div className="box">
    <div className='post'>
        <div className="bar-1">
            <div Style="padding:4px;">
            <h4>{name}</h4>
            <h6>{location}</h6>
            </div>
            <div className="dropdown">
            <a className="btn btn-success dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            </a>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <Link to={{pathname:'/update',state:{userid:{_id}}}}><li><a className="dropdown-item" >Update</a></li></Link>
            <Link to={{pathname:'/delete',state:{userid:{_id}}}}><li><a className="dropdown-item">Delete</a></li></Link>
        </ul>
        </div>
        {/* <Link to="/update">add</Link> */}
        {/* <Link to="/delete">add</Link> */}
        {/* <Link to={{pathname:'/update',state:{userid:{_id}}}}>update</Link> */}
        
        </div>
        <img className="pic" src={image} alt="postImg"></img>
        <div className="second-bar">
        <div className={style}><i className="fas fa-heart " onClick={(_id)=>likeUpdate(_id)}></i></div>
        
        <i>{total}likes</i>
        <img className="share s" src={share} alt="shareicon"/>
        <p Style="float:right;">{updatedDate}</p>
        </div>
        
        <p>{body}</p>

    </div>
    </div>)
}
export default  Post;