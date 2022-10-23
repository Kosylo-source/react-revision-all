import {useEffect, useState} from "react";


const Posts = () => {
 const [posts, setPost] = useState([])
     useEffect(()=>{ fetch('https://jsonplaceholder.typicode.com/posts')
             .then(value => value.json())
             .then(value => {
                 setPost(value)
             })},[])


    return (
        <div>
            post.map(post => {posts.id})
        </div>
    );
};

export default Posts;