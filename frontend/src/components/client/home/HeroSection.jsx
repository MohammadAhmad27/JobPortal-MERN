import { Search } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../../ui/button'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
    const [query, setQuery] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate('/browse');
    };

    return (
        <div className='text-center'>
            <div className="flex flex-col gap-5 my-10">
                <span className='mx-auto px-4 py-2 rounded-full font-medium bg-gray-100 text-[#F83002]'>No. 1 Job Hunt Website </span>
                <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi repellat voluptatum natus quisquam vero.</p>
                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full mx-auto gap-4 items-center'>
                    <input
                        type="text"
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder='Find your dream jobs'
                        className='outline-none border-none w-full' />
                    <Button
                        onClick={searchJobHandler}
                        className='rounded-r-full bg-[#6A38C2]'
                    >
                        <Search className='size-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}
