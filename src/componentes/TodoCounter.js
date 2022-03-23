import React from 'react';
import '../css/TodoCounter.css';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoCounter() {
  const {completedTodos, totalTodos, loading} = React.useContext(TodoContext);
  if(loading){
    return (
      <h2 className="TodoCounter">Cargando TODOs</h2>
    );
  }else{
    return (
      <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
  }
  
}

export { TodoCounter };
