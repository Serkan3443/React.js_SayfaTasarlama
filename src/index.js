import React from 'react';
import ReactDOM from 'react-dom/client';
import './CssPages/index.css';
import './CssPages/security.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';/*Farkl� sayfalar aras�nda ge�i� ya�abilmek i�in npm install react-router-dom yaparak y�kledim ve buraya import ettim*/ 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>,
    document.getElementById('root')
);

