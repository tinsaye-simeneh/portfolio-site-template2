import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/page/Main'

const App = () => {
  <>
  <Main/>
  </>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

