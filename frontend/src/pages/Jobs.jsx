import FilterCard from '@/components/jobs/FilterCard'
import JobCard from '@/components/jobs/JobCard'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

export default function Jobs() {
    const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <>
            <Navbar />
            <div className='max-w-7xl mx-10 mt-5'>
                <div className="flex gap-5">
                    <div className="w-[20%]">
                        <FilterCard />
                    </div>
                    {
                        !jobsArray.length ? (
                            <span className="text-center text-gray-500">No jobs found</span>
                        ) : (
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5 custom-scroll'>
                                <div className="grid grid-cols-3 gap-4">
                                    {jobsArray.map((item, index) => (
                                        <div key={index}>
                                            <JobCard />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}
