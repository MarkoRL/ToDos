import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext/TodoContext';

/* const defaulttodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: true },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
  { text: 'ultimo', completed: false },
]; */


function App() {
  //const [prueba, savePrueba] = useLocalStorage('PRUEBA_V1','Prueba');

/*   console.log('Render antes del use effect');

  React.useEffect(() => {
    console.log('use effect');
  },[totalTodos]);

  console.log('Render despues del use effect'); */

  return (//<p>{prueba}</p>,
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
