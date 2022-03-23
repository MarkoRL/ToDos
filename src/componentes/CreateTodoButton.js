import React from 'react';
import '../css/CreateTodoButton.css';
import { AgregaIcon } from './AgregaIcon';



function CreateTodoButton(props) {
const onClickButton = () =>{

  const estadoBoton = prevState => !prevState;
  props.setOpenModal(estadoBoton);
  console.log(estadoBoton);
    
};

  return (

    <button 
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      <AgregaIcon/>
      </button>
  );
}

export { CreateTodoButton };
