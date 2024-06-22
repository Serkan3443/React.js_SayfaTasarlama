import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Content from './Components/Content';
import Features from './Components/Features';
import About from './Components/About';
import Options from './Components/Options';
import Offer from './Components/Offer';
import Footer from './Components/Footer';
import SecuritySettings from './Components/SecuritySettings';
import { Routes, Route } from 'react-router-dom';
function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/SecuritySettings' element={<SecuritySettings />} />
            </Routes>
            <Footer />
        </>
    );
}

function Home() {
    return (
        <>
            <Header />
            <Content />
            <Features />
            <About />
            <Options />
            <Offer />
        </>
    );
}

function SecuritySettingsPage() {
    return (
        <>
            <Navbar />
            <SecuritySettings />
            <Footer />
        </>
    );
}

export default App;
