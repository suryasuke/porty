import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import { Provider, useSelector } from 'react-redux';
import store from './components/redux/store.js';
import { useEffect } from 'react';

// Move this component inside the Provider
function RootWrapper() {
  const toggle = useSelector((state) => state.toggle.toggle);

  useEffect(() => {
    document.body.style.backgroundColor = toggle ? '#ffffff' : '#000000';
    document.body.style.color = toggle ? '#000000' : '#ffffff'; // fix: contrast
  }, [toggle]);

  return (
    <div className={`container ${toggle ? 'light-mode' : 'dark-mode'}`}>
      <App />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <RootWrapper />
  </Provider>
);

reportWebVitals();
