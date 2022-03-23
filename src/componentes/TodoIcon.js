import React from "react";
import "../css/TodoIcon.css";
import {ReactComponent as CompleteIcon} from '../Iconos/check-solid.svg';
import {ReactComponent as DeleteIcon} from '../Iconos/circle-xmark-regular.svg';
import {ReactComponent as AgregaIcon} from '../Iconos/circle-plus-solid.svg';

const iconTypes = {
    "completa": color => (<CompleteIcon className="Icon-svg Icon-svg--completa" fill={color} />),
    "borra": color => (<DeleteIcon className="Icon-svg Icon-svg--borra" fill={color}/>),
    "agrega": color => (<AgregaIcon className="Icon-svgagrega Icon-svg--agrega" fill={color}/>)
};

function TodoIcon({type, color='gray', onClick}){
    
    return(
    <span className={`Icon-container Icon-container--${type}`} onClick={onClick}>
        
        {iconTypes[type](color)}
    </span>
    );
}

export {TodoIcon};