import React from 'react';

const Commenter = (props) => {
    const {name, email} = props.comment;
    return (
        <p>
            name: {name} <br />
            email: {email}
        </p>
    );
};

export default Commenter;