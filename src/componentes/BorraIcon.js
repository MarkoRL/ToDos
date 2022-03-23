import React from "react";
import { TodoIcon } from "./TodoIcon";

function BorraIcon({ onDelete }){
    return (
        <TodoIcon type="borra" onClick={onDelete} />
    )
}

export {BorraIcon};