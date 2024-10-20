import React from 'react'
import JobCard from '../jobs/JobCard';

export default function BrowseJobs() {
    const randomJobs = [1, 2, 3];
    return (
        <>
            <div className='max-w-7xl m-10'>
                <h1 className='p-4 font-bold text-xl'>Search Results ({randomJobs.length})</h1>
                <div className="grid grid-cols-3 gap-4">
                    {
                        randomJobs.map((item, index) => {
                            return (
                                <div key={index}>
                                    <JobCard />
                                </div>
                            )
                        }
                        )

                    }
                </div>
            </div>
        </>
    )
}
