import FilterCard from '@/components/client/jobs/FilterCard'
import JobCard from '@/components/cards/JobCard'
import Navbar from '@/components/shared/Navbar'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

export default function Jobs() {
    const { allJobs, searchedQuery } = useSelector((store) => store.job);
    const [filterJobs, setFilterJobs] = useState(allJobs);

    useEffect(() => {
        if (searchedQuery) {
            const filteredJobs = allJobs.filter((job) =>
                job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                job.location.toLowerCase().includes(searchedQuery.toLowerCase())
            );
            setFilterJobs(filteredJobs);
        } else {
            setFilterJobs(allJobs);
        }
    }, [allJobs, searchedQuery]);


    return (
        <>
            <Navbar />
            <div className='max-w-7xl mx-10 mt-5'>
                <div className="flex gap-5">
                    <div className="w-[20%]">
                        <FilterCard />
                    </div>
                    {
                        !filterJobs.length ? (
                            <span className="text-center text-gray-500">No jobs found</span>
                        ) : (
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5 custom-scroll'>
                                <div className="grid grid-cols-3 gap-4">
                                    {filterJobs.map((job) =>
                                    (
                                        <motion.div
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                            transition={{ duration: 0.5 }}
                                            key={job?._id}>
                                            <JobCard job={job} />
                                        </motion.div>
                                    )
                                    )}
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}
