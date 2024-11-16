import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SmoothScroll from '../Components/SmoothScroll';  // Certifique-se de que o caminho está correto

import './MainLayout.css';

const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
            <SmoothScroll />  
            <Header />
            <main className="content">{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
