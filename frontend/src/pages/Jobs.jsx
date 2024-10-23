import FilterCard from '@/components/jobs/FilterCard'
import JobCard from '@/components/cards/JobCard'
import Navbar from '@/components/shared/Navbar'
import React from 'react'
import { useSelector } from 'react-redux';

export default function Jobs() {
    const { allJobs } = useSelector((store) => store.job);

    return (
        <>
            <Navbar />
            <div className='max-w-7xl mx-10 mt-5'>
                <div className="flex gap-5">
                    <div className="w-[20%]">
                        <FilterCard />
                    </div>
                    {
                        !allJobs.length ? (
                            <span className="text-center text-gray-500">No jobs found</span>
                        ) : (
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5 custom-scroll'>
                                <div className="grid grid-cols-3 gap-4">
                                    {allJobs.map((job) => <JobCard key={job._id} job={job}/> )}
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}
