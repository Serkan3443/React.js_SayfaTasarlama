import React from 'react';
import ReactDOM from 'react-dom/client';
import './CssPages/index.css';
import './CssPages/security.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';/*Farklý sayfalar arasýnda geçiþ yaðabilmek için npm install react-router-dom yaparak yükledim ve buraya import ettim*/ 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>,
    document.getElementById('root')
);

