import React, {useEffect} from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { useParams } from 'react-router-dom';
import useGetJobById from '@/hooks/useGetJobById';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { setSingleJob } from '@/redux/jobSlice';


export default function JobDescription() {
    const isApplied = false;
    const params = useParams();
    const jobId = params.id;
    
    useEffect(() => {
        const fetchjobById = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
                    withCredentials: true
                });
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchjobById();
    }, [])


    return (
        <div className='max-w-6xl mx-auto my-10'>
            <div className="flex items-center justify-between">
                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-xl'>Frontend Developer</h1>
                    <div className="flex items-center gap-2">
                        <Badge className={`text-blue-700 font-bold`} variant='ghost'>12 Positions</Badge>
                        <Badge className={`text-[#F83002] font-bold`} variant='ghost'>Part time</Badge>
                        <Badge className={`text-[#7209b7] font-bold`} variant='ghost'>24 LPA</Badge>
                    </div>
                </div>
                <Button disabled={isApplied} className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}>{isApplied ? 'Already Applied' : 'Apply Now'}</Button>
            </div>
            <h2 className='border-b-2 border-gray-300 font-medium py-4'>Job Description</h2>
            <div className='my-4'>
                <h3 className='font-bold my-1'>
                    Role: <span className='pl-4 font-normal text-gray-800'>Frontend Developer</span>
                </h3>
                <h3 className='font-bold my-1'>
                    Location: <span className='pl-4 font-normal text-gray-800'>Islamabad</span>
                </h3>
                <h3 className='font-bold my-1'>
                    Description: <span className='pl-4 font-normal text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </h3>
                <h3 className='font-bold my-1'>
                    Experience: <span className='pl-4 font-normal text-gray-800'>1+ year</span>
                </h3>
                <h3 className='font-bold my-1'>
                    Salary: <span className='pl-4 font-normal text-gray-800'>80k</span>
                </h3>
                <h3 className='font-bold my-1'>
                    Total Applicants: <span className='pl-4 font-normal text-gray-800'>5</span>
                </h3>
                <h3 className='font-bold my-1'>
                    Posted Date: <span className='pl-4 font-normal text-gray-800'>{new Date().toLocaleDateString()}</span>
                </h3>
            </div>
        </div>
    )
}
