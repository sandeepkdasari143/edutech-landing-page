import React from 'react'
import Stack from '@mui/material/Stack';
import CourseCard from './CourseCard';

const Courses = () => {
    return (
        <Stack component={"section"} spacing={1} className={styles.coursesWrapper}>
            <Stack spacing={1}>
                <h3 className='font-semibold text-[#CAD5E2] text-center uppercase tracking-[2px]'>featured courses</h3>
                <h1 className='text-[#E07C24] text-center font-bold text-xl md:text-3xl capitalcase'>Our all time best courses!</h1>
            </Stack>

            <div className={styles.coursesContainer}>
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
        </Stack>
    )
}

const styles ={
    coursesWrapper: "bg-[#120E43] gap-28 py-16 items-center justify-center",
    coursesContainer: "w-[90%] mx-auto flex flex-wrap gap-5",
}
export default Courses