import React from 'react';
import '../stylesheets/Button.css'

function Button({ text, isClickButton, clickManager }){
    return(
        <button 
          className= { isClickButton ? 'click-Button' : 'reset-Button' }
          onClick = {clickManager}>
            { text }
        </button>
    )
}


export default Button