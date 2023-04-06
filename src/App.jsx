import React from 'react'
import Box from '@mui/material/Box';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import AppLayout from './AppLayout';

const App = () => {
  return (

    <Box>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App;