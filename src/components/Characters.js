import {useEffect, useState} from "react";
import Character from "./Character";

const Characters = () => {
    let [posts, setposts]=useState([])
    let [post, setpost]=useState({})

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(value => value.json())
            .then(value => {
                setposts(value)
            });
    },[]);

const details = (post) => {
    setpost(post)
};

    return (
        <div>
            {post.body && <div>{post.userId} {post.body}</div>}
            <h2>HELLO</h2>

        {posts.map((post,index) =><Character key={index} post={post} details={details}/>)}
        </div>
);
};

export default Characters;