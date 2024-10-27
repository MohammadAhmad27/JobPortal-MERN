import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { APPLICATION_API_END_POINT } from '@/utils/constant'
import { setAllAppliedJobs } from '@/redux/jobSlice'

export default function useGetAppliedJobs() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const res = await axios.get(`${APPLICATION_API_END_POINT}/get`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setAllAppliedJobs(res.data.application));
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchAppliedJobs();
  }, [])
}