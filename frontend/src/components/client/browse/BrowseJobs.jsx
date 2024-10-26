import React from 'react'
import JobCard from '../../cards/JobCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';

export default function BrowseJobs() {
    useGetAllJobs();
    const { allJobs } = useSelector(store => store.job);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(setSearchedQuery(''));
        }
    }, [])


    return (
        <>
            <div className='max-w-7xl m-10'>
                <h1 className='p-4 font-bold text-xl'>Search Results ({allJobs.length})</h1>
                <div className="grid grid-cols-3 gap-4">
                    {
                        allJobs && allJobs?.map((job) => {
                            return (
                                <div key={job._id}>
                                    <JobCard job={job} />
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
