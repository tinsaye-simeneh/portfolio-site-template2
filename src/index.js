import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/page/Home'

const App = () => {
  <>
  <Home/>
  </>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

