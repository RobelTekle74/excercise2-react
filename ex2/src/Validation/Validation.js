import React from 'react';

const validation = (props) => {

    let validationMessage = 'Text too short!';

    if (props.inputLength >= 5) {
        validationMessage = 'Text too long!'
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )
}

export default validation;