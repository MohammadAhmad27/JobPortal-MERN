import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Label } from '../ui/label'
import AppliedJobTable from './AppliedJobTable'

export default function Profile() {
    const skills = [
        'React', 'Next.js', 'Express.js', 'MongoDB'
    ];
    const isResume = true;
    return (
        <>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Avatar>
                            <AvatarImage src='/logo.jpg' />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>Full Name</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <Button variant='outline'><Pen /></Button>
                </div>
                <div className='flex flex-col gap-2 mt-5'>
                    <div className='flex items-center gap-3'>
                        <Mail />
                        <span>ahmad@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Contact />
                        <span>03001234567</span>
                    </div>
                </div>
                <div className='mt-5 flex flex-col gap-2'>
                    <h1>Skills </h1>
                    <div className='flex gap-1'>
                        {
                            !skills.length ? (
                                <p className='text-sm text-gray-100'>Skills not found</p>
                            ) : (
                                skills.map((item, index) => <Badge key={index}>{item}</Badge>)
                            )
                        }
                    </div>
                </div>
                <div className="grid max-w-sm w-full items-center gap-2 mt-5">
                    <Label className='text-sm font-bold'>Resume</Label>
                    {
                        !isResume ? (
                            <p className='text-sm text-gray-100'>Resume not found</p>
                        ) : (
                            <a href="https://www.youtube.com/channel/UCWV3obpZVGgJ3j9FVhEjF2Q" target='blank' className='text-blue-500 w-full hover:underline cursor-pointer'>Real Madrid</a>
                        )
                    }
                </div>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl mt-5">
                <h2 className='p-4 font-bold text-xl'>Applied Jobs</h2>
                <AppliedJobTable />
            </div>
        </>
    )
}