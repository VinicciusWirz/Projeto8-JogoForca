import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './assets/css/styles';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <GlobalStyle />
    <App />
    </>
);
