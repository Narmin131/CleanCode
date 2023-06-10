import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import "./sass/style.scss"
import "./i18n/i18"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
