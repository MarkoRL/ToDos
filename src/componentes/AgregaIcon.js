import React from "react";
import { TodoIcon } from "./TodoIcon";


function AgregaIcon({ onClickButton }){
    return (
        <TodoIcon type="agrega" color={'#61DAFA'} onClick={onClickButton} />
    )
}

export {AgregaIcon};