import React from 'react'
import Stack from '@mui/material/Stack';

const Courses = () => {
    return (
        <Stack component={"section"} spacing={1} className={styles.coursesWrapper}>
            <Stack spacing={1}>
                <h3 className='font-semibold text-[#CAD5E2] text-center uppercase tracking-[2px]'>featured courses</h3>
                <h1 className='text-[#E07C24] text-center font-bold text-xl md:text-3xl capitalcase'>Our all time best courses!</h1>
            </Stack>

            <div className={styles.coursesContainer}>
                
            </div>
        </Stack>
    )
}

const styles ={
    coursesWrapper: "h-[100vh] bg-[#120E43] gap-28 py-16 items-center justify-center",
    coursesContainer: "",
}
export default Courses