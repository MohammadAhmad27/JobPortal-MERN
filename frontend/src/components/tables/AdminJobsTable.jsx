import React, { useState, useEffect } from 'react'
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow, TableCell } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function AdminJobsTable() {
    const { allAdminJobs = [], searchJobByText } = useSelector(store => store.job);
    const [filterJob, setFilterJob] = useState(allAdminJobs);

    useEffect(() => {
        const filteredJob = allAdminJobs.length > 0 && allAdminJobs.filter((job) => {
            if (!searchJobByText) {
                return true;
            }
            return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase())
                || job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase());
        })
        setFilterJob(filteredJob);
    }, [allAdminJobs, searchJobByText])

    const navigate = useNavigate();
    return (
        <>
            <Table>
                <TableCaption>
                    A list of your recent posted jobs
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className='text-right'>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        !allAdminJobs.length ? (
                            <span className='text-center text-sm text-gray-500'>You haven't registered any job!</span>
                        ) : (
                            <>
                                {
                                    filterJob?.map((job) => (
                                        <TableRow key={job._id}>
                                            <TableCell>{job?.company?.name}</TableCell>
                                            <TableCell>{job?.title}</TableCell>
                                            <TableCell>{job?.createdAt.split('T')[0]}</TableCell>
                                            <TableCell className='text-right cursor-pointer'>
                                                <Popover>
                                                    <PopoverTrigger>
                                                        <MoreHorizontal />
                                                    </PopoverTrigger>
                                                    <PopoverContent className='w-20 cursor-pointer'>
                                                        <div
                                                            variant='outline'
                                                            onClick={() => navigate(`/admin/jobs/${job._id}`)}
                                                            className='flex items-center w-fit gap-1'>
                                                            <Edit2 className='w-4' />
                                                            <span>Edit</span>
                                                        </div>
                                                    </PopoverContent>
                                                </Popover>
                                            </TableCell>
                                        </TableRow>

                                    ))
                                }

                            </>
                        )
                    }

                </TableBody>
            </Table>
        </>
    )
}