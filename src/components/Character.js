const Character = ({post,details}) => {

    return (
        <div>
            {post.title}
            <button onClick={()=>{
                details(post);
            }}>details</button>
        </div>
    );
};

export default Character;