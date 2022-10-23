

const Post = ({post,details}) => {
    return (
        <div>
            <div>{post.id}--{post.title}
                <button onClick={()=>{details(post)}}>Details</button></div>
        </div>
    );
};

export default Post;