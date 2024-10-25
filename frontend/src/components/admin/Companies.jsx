import React from 'react'
import CompaniesTable from '../tables/CompaniesTable'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'

export default function Companies() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className="max-w-6xl mx-auto my-10">
                <div className="flex items-center justify-between my-10">
                    <Input
                        className='w-fit'
                        placeholder='Filter by name'
                    />
                    <Button onClick={() => navigate('/admin/companies/create')}>New Company</Button>
                </div>
                <CompaniesTable />
            </div>
        </>
    )
}
