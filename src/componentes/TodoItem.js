import React from 'react';
import '../css/TodoItem.css';
import { CompletaIcon } from './CompletaIcon';
import { BorraIcon } from './BorraIcon';


function TodoItem(props) {

  return (
    <li className="TodoItem">
    
      <CompletaIcon completed={props.completed} onComplete={props.onComplete}/>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <BorraIcon onDelete={props.onDelete}/>
    </li>
  );
}

export { TodoItem };
