import React from 'react'
import Stack from '@mui/material/Stack';
import { courses } from '../../mock-data/courseSyllabus';
import IconButton from '@mui/material/IconButton';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const CoursePage = () => {
    return (
        <div className='pt-[100px]'>

            <div className={styles.courseSyllabusWrapper}>
                <Stack spacing={2} className={styles.courseSyllabusContainer}>
                    {
                        courses[0].chapters[0].sections?.map((section, index) => {
                            return(
                                <Stack spacing={1} key={index} className={styles.chapter}>
                                    <div className={styles.section}>
                                        <h1>{section.sectionName}</h1>
                                        <IconButton className={styles.spreadArrow}>
                                            <ArrowRightIcon className="text-xl md:text-xl lg:text-2xl"/>
                                        </IconButton>
                                    </div>

                                    <Stack component={"ul"} className={styles.topics}>
                                        {
                                            section.topicsCovered.map((topic, index) => {
                                                return(
                                                    <li key={index} className='py-1'>
                                                        <span><ArrowRightAltIcon/></span>
                                                        {topic}
                                                    </li>
                                                )
                                                })
                                        }
                                    </Stack>
                                </Stack>
                            )
                        })
                    }
                </Stack>
            </div>
        </div>
    )
}
const styles = {
    courseSyllabusWrapper: "flex items-center justify-center bg-[#120E43] py-7",
    courseSyllabusContainer: "w-[70%] mx-auto bg-[#CAD5E2] p-3 rounded-xl",
    chapter: "transition-all duration-[1000ms] linear group cursor-pointer",
    section: "flex items-center justify-between bg-white rounded-full px-5 py-2 font-semibold text-lg",
    spreadArrow: 'transition-all duration-[750ms] linear border bg-[#CAD5E2] text-[#E07C24] group-hover:bg-[#E07C24] group-hover:text-white group-hover:rotate-90 pointer-events-none',
    topics: "transition-all duration-[1000ms] linear hidden group-hover:flex opacity-0 group-hover:opacity-100 text-sm text-[#334155] bg-transparent px-5 py-2",
}

export default CoursePage