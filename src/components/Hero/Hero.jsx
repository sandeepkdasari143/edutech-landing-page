import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import HeroImg from '../../assets/HOME/HERO02.jpg';
import Typography from '@mui/material/Typography';
import './Hero.css';
const Hero = () => {
    return(
        <Box className={styles.HeroWrapper}>
            <img src={HeroImg} className={styles.HeroBGImg} />

            <div className='innerWrapper'></div>

            {/* Hero Section Typography here... */}
            <Box className={styles.HeroTypographyWrapper}>
                <Stack>
                    <Typography></Typography>
                    <Typography></Typography>
                    <button></button>
                </Stack>
            </Box>
        </Box>
    )
}

const styles = {
    HeroWrapper: "relative flex flex-col items-center lg:items-end lg:justify-end h-[100vh] w-[100%] bg-gradient-to-r from-cyan-500/50 to-blue-500/50 transition-all duration-500 ease-in-out heroWrapper",

    HeroBGImg: "transition-all duration-500 ease-in-out lg:absolute h-[50%] lg:h-[100%] w-[100%] object-cover object-left-top",

    HeroTypographyWrapper:"float-right w-[90%] lg:w-[50%] xl:w-[50%] h-[50%] lg:h-[90vh] border-2 z-10 flex items-center justify-center",
}

export default Hero;