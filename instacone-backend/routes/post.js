const express=require("express");
const Post = require("../model/post");

const router=express.Router();

router.get("/",async function(req,res){
    try{

        const posts=await Post.find();
        return res.json({
            status:"success",
            data:{
                posts
            }
        })
    }catch(e){
        res.json({
            status:"failed",
            message:e.message
        })

    }
    
})

router.post("/",async function(req,res){
    const {name,location,body,image,likes}=req.body;
    const post=await Post.create({name,location,body,image,likes,user:req.user});
    res.json({
        status:"success",
        data:{
            post
        }
    })
    
})

router.put("/:id",async function(req,res){
    const {name,location,body,image,likes}=req.body;
    const post=await Post.findOne({_id:req.params.id});
    if (!post){
        return res.status(404).json({
            status:"failed",
            message:"Post Not Found"
        })
    }
    if (String(post.user)!==req.user){
        return res.status(403).json({
            status:"failed",
            message:"Forbidden"
        })
    }
    await Post.updateOne({_id:req.params.id},{
        name,location,body,image,likes
    });
    res.json({
        status:"success"
    })
})
router.delete("/:id",async function(req,res){
    const post=await Post.findOne({_id:req.params.id});
    if (!post){
        return res.status(404).json({
            status:"failed",
            message:"Post Not Found"
        })
    }
    if (String(post.user)!==req.user){
        return res.status(403).json({
            status:"failed",
            message:"Forbidden"
        })
    }
    await Post.deleteOne({_id:req.params.id});
    res.json({
        status:"success"
    })
})
router.put('/:id/unlike',async function (req,res){
    try{
        const {Id}=req.body;
    const post=await Post.findOne({_id:req.params.id});
    if(!post){
        res.json({
            status:"failed",
            message:"post not found"
        })
    }
    await Post.updateOne({_id:req.params.id},{$pull:{likedusers:Id}},{new:true});
    res.json({
        status:"success",
        data:{
            post
        }
    })
    }catch(e){
        res.json({
            status:"failed"})
        }
    })
    router.put('/:id/like',async function (req,res){
        try{
            const {Id}=req.body;
        const post=await Post.findOne({_id:req.params.id});
        if(!post){
            res.json({
                status:"failed",
                message:"post not found"
            })
        }
        await Post.updateOne({_id:req.params.id},{$push:{likedusers:Id}},{new:true});
        res.json({
            status:"success",
            data:{
                post
            }
        })
        }catch(e){
            res.json({
                status:"failed"})
            }
        })
module.exports=router;