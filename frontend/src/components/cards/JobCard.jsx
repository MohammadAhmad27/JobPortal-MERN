import React from 'react'
import { Button } from '../ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'
import { useNavigate } from 'react-router-dom'

export default function JobCard({ job }) {
  const navigate = useNavigate();
  const daysAgo = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const diff = currentTime - createdAt
    return Math.floor(diff / (1000 * 24 * 60 * 60))
  };
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
      <div className="flex items-center justify-between">
        <p className='text-sm text-gray-500'>{daysAgo(job?.createdAt) === 0 ? 'Today' : `${daysAgo(job?.createdAt)} days ago`}</p>
        <Button variant='outline' className='rounded-full' size='icon'>
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button variant='outline' size='icon' className='p-6' >
          <Avatar>
            <AvatarImage src='/logo.jpg' />
          </Avatar>
        </Button>
        <div>
          <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
          <p className='text-sm text-gray-500'>{job?.location}</p>
        </div>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
        <p className='text-sm text-gray-600'>{job?.description}</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <Badge className={`text-blue-700 font-bold`} variant='ghost'>{job?.position}</Badge>
        <Badge className={`text-[#F83002] font-bold`} variant='ghost'>{job?.jobType}</Badge>
        <Badge className={`text-[#7209b7] font-bold`} variant='ghost'>{job?.salary}</Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button variant='outline' onClick={() => navigate(`/jobs/description/${job?._id}`)}>Details</Button>
        <Button className='bg-[#7209b7]'>Save for later</Button>
      </div>
    </div>
  )
}
