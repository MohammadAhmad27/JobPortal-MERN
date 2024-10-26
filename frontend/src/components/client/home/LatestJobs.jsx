import React from 'react';
import LatestJobCards from '../../cards/LatestJobCards';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function LatestJobs() {
    const { allJobs } = useSelector((store) => store.job);
    const navigate = useNavigate();

    return (
        <div className='max-w-7xl m-20'>
            <h1 className='text-4xl font-bold'><span className='text-[#6A38C2]'>Latest & Top</span> Job Openings</h1>
            <div className='grid grid-cols-3 gap-4 my-5'>
                {
                    !allJobs.length ? <span>No Jobs found</span> : allJobs.slice(0, 6).map((job) =>
                        <div onClick={() => navigate(`/jobs/description/${job._id}`)} key={job._id}>
                            <LatestJobCards
                                job={job}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    );
}
