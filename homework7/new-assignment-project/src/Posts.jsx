import { useEffect } from "react";
import { useState } from "react";
import Post from "./Post";

export default function Posts(){
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data));
        // .then(data => console.log(data));
    },[]);

    return (
        <div className="">
            <p>Posts: {posts.length}</p>
            {
                // posts.map(post => console.log(post))
                posts.map(post => <Post post={post}></Post>)
            }
            
        </div>
    );
}