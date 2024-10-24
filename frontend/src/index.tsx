import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { createRoot } from 'react-dom/client'; 
import { store } from './store';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
// const container = document.getElementById('root'); // Get the root DOM element
// const root = createRoot(container!); // Create root using createRoot in React 18
const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


// const root = ReactDOM.createRoot(document.getElementById('root')!);

// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
