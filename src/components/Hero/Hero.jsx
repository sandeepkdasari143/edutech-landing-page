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
            {/* <Box className={styles.HeroTypographyWrapper}>
                <Stack spacing={3} alignItems={"flex-start"} className='w-[60%] mx-auto text-[#FBCFE8] h-[100%]'>
                    <Typography className='text-[90px] leading-none'>Explain the value you provide...</Typography>
                    <Typography className='text-[30px] leading-none'>Explain how you will create the value to the customers who wants to buy your product. Simply sell the product here...</Typography>
                    <button>call to action</button>
                </Stack>
            </Box> */}
        </Box>
    )
}

const styles = {
    HeroWrapper: "relative flex flex-col items-center lg:items-end lg:justify-end lg:h-[100vh] w-[100%] bg-gradient-to-r from-cyan-500/50 to-blue-500/50 transition-all duration-500 ease-in-out heroWrapper",

    HeroBGImg: "transition-all duration-500 ease-in-out lg:absolute h-[50%] lg:h-[100%] w-[100%] object-cover object-left-top",

    HeroTypographyWrapper:"float-right w-[90%] lg:w-[50%] xl:w-[50%] h-max-content lg:h-[90vh] z-10 flex items-center justify-center",
}

export default Hero;