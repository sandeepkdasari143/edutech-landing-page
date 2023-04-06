import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import HeroImg from '../../assets/HOME/HERO02.jpg'

const Hero = () => {
    return(
        <Box className={styles.HeroWrapper}>
            <img src={HeroImg} className={styles.HeroBGImg} />

            {/* Hero Section Typography here... */}
            <Stack spacing={3} alignItems={"start"} className={styles.HeroTypography}>
            </Stack>
        </Box>
    )
}

const styles = {
    HeroWrapper: "relative flex flex-col items-center justify-end h-[100vh] w-[100%] bg-gradient-to-r from-cyan-500/50 to-blue-500/50 transition-all duration-500 ease-in-out",
    HeroBGImg: "transition-all duration-500 ease-in-out lg:absolute lg:h-[100%] w-[100%] object-cover object-left-top",
    HeroTypography:"w-[90%] lg:w-[60%] border-2 z-10 h-[80vh]",
}

export default Hero