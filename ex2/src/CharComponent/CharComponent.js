import React from 'react';
// this is how you link another file.
import './CharComponent.css';

const charcomponent = (props) => {
    return (
        // react uses className instead of just class
        <div className= "CharComponent" onClick={props.click}>
            {props.ch}
        </div>
    )
}

export default charcomponent;