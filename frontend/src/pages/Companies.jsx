import React, { useState, useEffect } from 'react'
import CompaniesTable from '../components/tables/CompaniesTable'
import Navbar from '../components/shared/Navbar'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '@/redux/companySlice'

export default function Companies() {
    useGetAllCompanies();
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearchCompanyByText(input));
    }, [input])

    return (
        <>
            <Navbar />
            <div className="max-w-6xl mx-auto my-10">
                <div className="flex items-center justify-between my-10">
                    <Input
                        className='w-fit'
                        placeholder='Filter by name'
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button onClick={() => navigate('/admin/companies/create')}>New Company</Button>
                </div>
                <CompaniesTable />
            </div>
        </>
    )
}
