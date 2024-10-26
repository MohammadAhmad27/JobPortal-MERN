import React from 'react'
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow, TableCell } from '../ui/table'
import { Badge } from '../ui/badge'

export default function AppliedJobTable() {
    return (
        <div className='max-md:p-4'>
            <Table>
                <TableCaption>A list or your applied jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className='text-right'>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody> {
                    [1, 2].map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{new Date().toLocaleDateString()}</TableCell>
                            <TableCell>Software Engineer</TableCell>
                            <TableCell>Mirosoft</TableCell>
                            <TableCell className='text-right'>
                                <Badge>Applied</Badge>
                            </TableCell>
                        </TableRow>
                    ))
                }
                </TableBody>
            </Table>
        </div>
    )
}
