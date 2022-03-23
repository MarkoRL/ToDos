import React from 'react';
import ReactDOM from 'react-dom';
import App from './componentes/App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.createPortal(
  <App />,
  document.getElementById('root')
);