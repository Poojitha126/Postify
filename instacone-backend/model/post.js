const mongoose=require("mongoose")


const PostSchema =mongoose.Schema({
    name:{type:"String",require:true},
    location:{type:"String",require:true},
    body:{type:"String"},
    image:{type:"String",require:true},
    user:{type:mongoose.Types.ObjectId,ref:"User"},
    likes:{type:Number,default:0},
    likedusers:[{type:mongoose.Types.ObjectId,ref:"User"}],
    date:{type:Date,default:Date.now}
});

const Post=mongoose.model("Post",PostSchema);
module.exports=Post;