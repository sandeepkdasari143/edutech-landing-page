import React from 'react'
import Box from '@mui/material/Box';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Outlet} from 'react-router-dom';

const AppLayout = () => {
    return (
        <Box>
            <Header />
            <Outlet />
            <Footer />
        </Box>        
    )
}

export default AppLayout