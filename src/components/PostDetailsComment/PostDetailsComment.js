import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Commenter from '../Commenter/Commenter';

const PostDetailsComment = () => {
    const { keyId } = useParams();

    const [post, setPost] = useState({})
    const {title, body} = post;
    const [comments, setComments] = useState([])
    
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${keyId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [keyId])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${keyId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [keyId])
    return (
        <div>
            <h3>This is post Detail id: {keyId}</h3>
            <h1>{title}</h1>
            <h4>{body}</h4>
            <h3>Total comments: {comments.length}</h3>
            {
                comments.map(comment => <Commenter comment={comment}></Commenter>)
            }
        </div>
    );
};

export default PostDetailsComment;