import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Hero from '../../components/Hero/Hero';
import Testimonials from './sections/Testimonials/Testimonials';
import Courses from './sections/Courses/Courses';


const Home = () => {
    return (
        <Box>
            <main>
                <Hero />
                <Courses />
                <Testimonials />
            </main>
        </Box>
    )
}

export default Home