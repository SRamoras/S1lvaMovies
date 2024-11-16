import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import Series from './Pages/Series';
import Gender from './Pages/Gender';
import Random from './Pages/Random';
import SearchResults from './Pages/SearchResults';
import Details from './Pages/Details';
import LoadingScreen from './components/LoadingScreen';
import usePrevious from './hooks/usePrevious';

function RouterComponent() {
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const prevLocation = usePrevious(location.pathname);

    useEffect(() => {
        if (prevLocation !== location.pathname && location.pathname !== '/search') {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        }
    }, [location.pathname, prevLocation]);

    return (
        <>
        
            <Routes>
                <Route path="/" element={<MainLayout><Home /></MainLayout>} />
                <Route path="/search" element={<MainLayout><SearchResults /></MainLayout>} />
                <Route path="/movies" element={<MainLayout><Movies /></MainLayout>} />
                <Route path="/series" element={<MainLayout><Series /></MainLayout>} />
                <Route path="/gender" element={<MainLayout><Gender /></MainLayout>} />
                <Route path="/random" element={<MainLayout><Random /></MainLayout>} />
                <Route path="/movies/:id" element={<MainLayout><Details /></MainLayout>} />
                <Route path="/series/:id" element={<MainLayout><Details /></MainLayout>} />
                <Route path="/animes/:id" element={<MainLayout><Details /></MainLayout>} />
            </Routes>
        </>
    );
}

export default RouterComponent;
