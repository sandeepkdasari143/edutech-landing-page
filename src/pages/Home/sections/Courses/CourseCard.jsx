import React from 'react'
import Stack from '@mui/material/Stack';

const CourseCard = () => {
    return (
        <div className='border border-red-700 rounded-lg w-[45%] h-[300px] mx-auto'>
            <div className={styles.courseCardContainer}>
                <div className={styles.courseTechStackLogoContainer}>
                    <img className={styles.courseTechStackLogo}
                    src="" alt="" />
                </div>

                <Stack spacing={3} className={styles.courseDescription}>
                    <h1>React JS</h1>
                    <h1>Best Course</h1>
                    <Stack></Stack>
                </Stack>
            </div>
        </div>
    )
}

const styles = {
    courseCardContainer:"h-full w-full flex items-center",
    courseTechStackLogoContainer:"h-full basis-1/4 flex items-center justify-center",
    courseTechStackLogo:"rounded-full border-2 border-red-700 object-cover",
    courseDescription:"h-full basis-3/4 p-16 text-white",
}
export default CourseCard