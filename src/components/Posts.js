import {useEffect, useState} from "react";


const Posts = () => {
 const [post, setPost] = useState([])
     useEffect( fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(value => {
setPost(value)
        }),[])


    return (
        <div>

        </div>
    );
};

export default Posts;