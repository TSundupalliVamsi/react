import React, { useState } from 'react'
import useFetch from '../useFetch'

const CustomHook = () => {

    const posts = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    if(!posts) return <p>Loading...</p>

    return (
        <div className="container">
            <h1 className="text-center mb-4">Posts</h1>
            <div className="row">
                {posts.map((post) => (
                    <div key={post.id} className="col-md-6 col-lg-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body}</p>
                            </div>
                            <div className="card-footer text-muted">
                                User ID: {post.userId}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CustomHook
