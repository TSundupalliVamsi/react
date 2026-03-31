import { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
    //         .then((response) => {
    //             setPosts(response.data);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }, []);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then((res) => setPosts(res))
        .catch((err) => console.error(err))
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default Axios;