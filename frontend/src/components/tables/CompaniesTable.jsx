import React from 'react'
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow, TableCell } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'

export default function CompaniesTable() {
    return (
        <>
            <Table>
                <TableCaption>
                    A list of your recent registered companies
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className='text-right'>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Avatar>
                                <AvatarImage src='/logo2.jpeg' />
                            </Avatar>
                        </TableCell>
                        <TableCell>Company Name</TableCell>
                        <TableCell>{new Date().toLocaleString()}</TableCell>
                        <TableCell className='text-right cursor-pointer'>
                            <Popover>
                                <PopoverTrigger>
                                    <MoreHorizontal />
                                </PopoverTrigger>
                                <PopoverContent className='w-32'>
                                    <div className='flex items-center w-fit gap-2'>
                                        <Edit2 className='w-4' />
                                        <span>Edit</span>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}
