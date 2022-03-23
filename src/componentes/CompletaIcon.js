import React from "react";
import { TodoIcon } from "./TodoIcon";

function CompletaIcon({ completed, onComplete}){
    return(
        <TodoIcon type="completa" color={completed ? '#4caf50' : 'gray'} onClick={onComplete}/>
    )
}

export {CompletaIcon};