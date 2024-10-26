import React, { useState } from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Label } from '../ui/label'
import AppliedJobTable from '../tables/AppliedJobTable'
import UpdateProfileDialog from '../dialogs/UpdateProfileDialog'
import { useSelector } from 'react-redux'
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs'

export default function Profile() {
    useGetAppliedJobs();
    const { user } = useSelector(store => store.auth);
    const [open, setOpen] = useState(false);
    const hasResume = !!user?.profile?.resume;
    const hasSkills = user?.profile?.skills && user?.profile?.skills.length > 0;


    return (
        <>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Avatar>
                            <AvatarImage src={user?.profile?.profilePhoto} />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>{user?.fullname}</h1>
                            <p>{user?.profile?.bio}</p>
                        </div>
                    </div>
                    <Button variant='outline' onClick={() => setOpen(true)}><Pen /></Button>
                </div>

                <div className='flex flex-col gap-2 mt-5'>
                    <div className='flex items-center gap-3'>
                        <Mail />
                        <span>{user?.email}</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Contact />
                        <span>{user?.phoneNumber}</span>
                    </div>
                </div>

                {/* Skills Section */}
                <div className='mt-5 flex flex-col gap-2'>
                    <h1>Skills </h1>
                    <div className='flex gap-1'>
                        {
                            !hasSkills ? (
                                <p className='text-sm text-gray-500'>
                                    Add Skills
                                </p>
                            ) : (
                                user?.profile?.skills.map((item, index) => <Badge key={index}>{item}</Badge>)
                            )
                        }
                    </div>
                </div>

                {/* Resume Section */}
                <div className="grid max-w-sm w-full items-center gap-2 mt-5">
                    <Label className='text-sm font-bold'>Resume</Label>
                    {
                        hasResume ? (
                            <a target='_blank' href={user?.profile?.resume} className='text-blue-500 w-full hover:underline cursor-pointer'>
                                {user?.profile?.resumeOriginalName}
                            </a>
                        ) : (
                            <p className='text-sm text-gray-500'>
                                Upload Resume
                            </p>
                        )
                    }
                </div>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl my-5">
                <h2 className='p-4 font-bold text-xl'>Applied Jobs</h2>
                <AppliedJobTable />
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </>
    )
}
