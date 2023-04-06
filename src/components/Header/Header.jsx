import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <Stack component={"header"} direction={"row"} justifyContent={"space-between"} alignItems={"center"} className={styles.Header}>

            {/* LOGO */}
            <Link to="/" className={styles.Logo}>
                <img src="" />
                <span>Logo</span>
            </Link>

            {/* Primary Navigation and CTA Button */}
            <Box component={"div"}>
                {/* Navigation */}
                <Stack component={"nav"} direction={"row"} alignItems={"center"} spacing={7}>
                    <Stack component={"ul"} direction={"row"} spacing={5} className={styles.NavBar}>
                        <Link className={styles.NavItem} to="/about">About Us</Link>
                        <Link className={styles.NavItem} to="/results">Our Results</Link>
                        <Link className={styles.NavItem} to="/courses">Courses</Link>
                        <Link className={styles.NavItem} to="/contact">Contact</Link>
                    </Stack>
                    {/* Call to Action Button */}
                    <button className={styles.CTABtn}>Register</button>
                </Stack>
            </Box>

        </Stack>
    )
}

const styles = {
    Header:"h-[10vh] absolute inset-x-0 z-10 px-16 border-b border-[#348f50]",
    Logo: "cursor-pointer flex flex-row gap-3",
    NavBar:"",
    NavItem:"",
    CTABtn: "bg-[#348f50] text-[#ffffff] px-5 py-2 rounded-sm",
}

export default Header