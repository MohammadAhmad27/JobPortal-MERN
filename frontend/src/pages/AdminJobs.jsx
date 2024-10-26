import React, { useState, useEffect } from 'react'
import Navbar from '../components/shared/Navbar'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearchJobByText } from '@/redux/jobSlice'
import AdminJobsTable from '@/components/tables/AdminJobsTable'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'

export default function AdminJobs() {
  useGetAllAdminJobs();
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input])

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto my-10">
        <div className="flex items-center justify-between my-10">
          <Input
            className='w-fit'
            placeholder='Filter by name & role'
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={() => navigate('/admin/jobs/create')}>New Job</Button>
        </div>
        <AdminJobsTable />
      </div>
    </>
  )
}
