import React from 'react'
import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { testimonials } from '../../../../mock-data/testimonials';
import TestimonialCard from './TestimonialCard';
import Stack from '@mui/material/Stack';

const Testimonials = () => {
    const [Testimonials] = React.useState(testimonials);
    const [testimonialIndex, setTestimonialIndex] = React.useState(0);

    return (
        <section className={styles.testimonialsWrapper}>
            <Stack spacing={1}>
                <h3 className='font-bold text-[#ffffff] text-center uppercase tracking-[2px]'>students testimonials</h3>
                <h1 className='text-[#E07C24] text-center font-bold text-xl md:text-3xl'>What our students think about us!</h1>
            </Stack>

            <div className={styles.testimonialContainer}>

                <div className='relative group rounded-md flex items-center'>
                    <div className='absolute -left-[17px] md:-left-[30px] z-10 rounded-full'>
                        <IconButton onClick={()=>testimonialIndex>0 && setTestimonialIndex(testimonialIndex-1)}
                        className={styles.arrow}><ArrowLeftIcon className="text-xl md:text-3xl lg:text-4xl"/></IconButton>
                    </div>

                    <TestimonialCard testimonial={Testimonials[testimonialIndex]} />

                    <div className='absolute -right-[17px] md:-right-[30px] z-10 rounded-full'>
                        <IconButton onClick={()=>testimonialIndex<Testimonials.length - 1 && setTestimonialIndex(testimonialIndex+1)}
                        className={styles.arrow}><ArrowRightIcon className="text-xl md:text-3xl lg:text-4xl"/></IconButton>
                    </div>
                </div>

            </div>
        </section>
    )
}

const styles = {
    testimonialsWrapper:"w-[100%] bg-[#120E43] flex flex-col items-center justify-around gap-28 py-16",
    testimonialContainer:"relative border border-[#E07C24] rounded-md w-[90%] md:w-[75%] lg:w-[60%] mx-auto flex items-center gap-3",
    arrow: 'transition-all duration-700 linear border bg-[#E07C24] hover:bg-[#E07C24] text-[#120E43]',
}
export default Testimonials