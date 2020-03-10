import React from 'react';
import './Bubble.css';

function Bubble(props) {

    const bubbleParameters = {
        borderRadius: '50%',
        backgroundColor: props.backgroundColor,
        width: props.width,
        height: props.height,
        top:props.top,
        left:props.left,
        right:props.right,
        bottom:props.bottom,
        transform: `translate(${props.transformX},${props.transformY})`,
    };

    //removes the border radius and background color 
    //if the bubble props is set to offfset.
    if(props.type === 'offset'){
        bubbleParameters.borderRadius = '0';
        bubbleParameters.backgroundColor = 'none';
    }

    return (
        <div id="bubble" style={bubbleParameters} className={props.type==='offset'?'offset':''}></div>
    );
}



export default Bubble;
