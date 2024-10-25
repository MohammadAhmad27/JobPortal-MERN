import React from 'react'
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow, TableCell } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'

export default function CompaniesTable() {
    const { allCompanies } = useSelector(store => store.company);
    const navigate = useNavigate();
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
                    {
                        !allCompanies.length ? (
                            <span className='text-center text-sm text-gray-500'>You haven't registered any company!</span>
                        ) : (
                            <>
                                {
                                    allCompanies?.map((company) => (
                                        <TableRow key={company._id}>
                                            <TableCell>
                                                <Avatar>
                                                    <AvatarImage src={company?.logo} />
                                                </Avatar>
                                            </TableCell>
                                            <TableCell>{company?.name}</TableCell>
                                            <TableCell>{company?.createdAt.split('T')[0]}</TableCell>
                                            <TableCell className='text-right cursor-pointer'>
                                                <Popover>
                                                    <PopoverTrigger>
                                                        <MoreHorizontal />
                                                    </PopoverTrigger>
                                                    <PopoverContent className='w-32 cursor-pointer'>
                                                        <div
                                                            variant='outline'
                                                            onClick={() => navigate(`/admin/companies/${company._id}`)}
                                                            className='flex items-center w-fit gap-2'>
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
