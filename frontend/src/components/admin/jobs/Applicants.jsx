import Navbar from '@/components/shared/Navbar'
import ApplicantsTable from '@/components/tables/ApplicantsTable'
import useGetAllApplicants from '@/hooks/useGetAllApplicants'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function Applicants() {
    const params = useParams();
    useGetAllApplicants(params.id);

    const { applicants } = useSelector(store => store.application);
    return (
        <>
            <Navbar />
            <div className='max-w-6xl mx-auto'>
                <h1 className='text-xl font-bold my-10'>Applicants ({applicants?.applications?.length})</h1>
                <ApplicantsTable />
            </div>
        </>
    )
}
