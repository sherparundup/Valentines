import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';  // Keep BrowserRouter here
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Valentines">  {/* Router is wrapped only here */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
