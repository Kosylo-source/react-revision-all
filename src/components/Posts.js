import {useEffect, useState} from "react";
import Post from "./Post";


const Posts = () => {
 const [posts, setPosts] = useState([])
 const [post, setPost] = useState([])
     useEffect(()=>{ fetch('https://jsonplaceholder.typicode.com/posts')
             .then(value => value.json())
             .then(value => {
                 setPosts(value)
             })},[])

const details = (post)=>{
     setPost(post)
}
    return (
        <div>
            {post.id && <div>{post.body}</div>}
            {posts.map((post, index) => <Post key={index} post={post} details={details}/>)}
        </div>
    );
};

export default Posts;