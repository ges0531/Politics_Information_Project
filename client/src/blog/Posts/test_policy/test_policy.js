import React from 'react';

const changeText = ({questions}) => {
    return (
        <div>
            <h1>{questions[qn].question}</h1>
        </div>
    )
}

export default changeText;