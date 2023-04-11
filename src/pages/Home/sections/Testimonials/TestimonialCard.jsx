import React from 'react'
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

const TestimonialCard = ({testimonial}) => {
    const {id, studentName, studentJobRole, studentImageUrl, studentTestimonial} = testimonial;

    return (
        <div className='bg-[#CAD5E2] relative drop-shadow-xl px-3 md:p-7 lg:px-7 h-[270px] lg:h-[370px] flex-1 flex items-center justify-center'>
            <Stack spacing={2}>
                <p className='text-white text-center text-sm md:text-md lg:text-lg line-clamp-4 lg:leading-loose'>{studentTestimonial}</p>
                <Stack spacing={1}>
                    <h2 className='text-white text-center font-bold text-xl lg:text-3xl'>{studentName}</h2>
                    <h6 className='text-[#E07C24] text-center text-xs md:text-normal uppercase tracking-[1px] md:tracking-[2px] font-semibold'>{studentJobRole}</h6>
                </Stack>
            </Stack>

            <div className='absolute -top-[35px] md:-top-[45px] lg:-top-[60px]'>
                <Avatar alt={studentName} src={studentImageUrl} className='w-[70px] h-[70px] md:w-[90px] md:h-[90px]  lg:w-[120px] lg:h-[120px]'/>
            </div>

            <div className='absolute bg-white inset-x-[-2px] inset-y-[-2px] -z-10 bg-gradient-to-tr from-[#89ff00] via-[#060c21] to-[#00bcd4] rounded-lg'></div>
            <div className='absolute bg-white inset-x-[-2px] inset-y-[-2px] -z-10 bg-gradient-to-tr from-[#89ff00] via-[#060c21] to-[#00bcd4] rounded-lg'></div>
        </div>

    )
}

export default TestimonialCard