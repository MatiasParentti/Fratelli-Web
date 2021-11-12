import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { StateProvider } from './componentes/Shop/StateProvider';
import reducer, { initialState } from './componentes/Shop/reducer';


ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}><App /></StateProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

