import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const {id, title, body} = props.post;

    const history = useHistory();
    const showComments = id => {
        const url = `posts/${id}`;
        history.push(url);
    }

    return (
        <div style={{
            border: '1px solid green',
            margin: '10px', 
            backgroundColor: 'black',
            color: 'white',
            paddingBottom: '10px'
                    }}>

            <h5>id: {id}</h5>
            <h1>{title}</h1>
            <h3>{body}</h3>
            
            <button onClick={() => showComments(id)} >Comments</button>
        </div>
    );
};

export default Post;