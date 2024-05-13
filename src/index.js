import React from 'react';
import { createRoot } from 'react-dom/client'; // Use createRoot from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();