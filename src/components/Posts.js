import {useEffect, useState} from "react";
import Post from "./Post";


const Posts = () => {
 const [posts, setPost] = useState([])
     useEffect(()=>{ fetch('https://jsonplaceholder.typicode.com/posts')
             .then(value => value.json())
             .then(value => {
                 setPost(value)
             })},[])


    return (
        <div>
            {posts.map((post, index) => <Post key={index} post={post}/>)}
        </div>
    );
};

export default Posts;