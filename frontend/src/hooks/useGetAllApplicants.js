import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { setApplicants } from '@/redux/applicationSlice';

export default function useGetAllApplicants(jobId) {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAllApplicants = async () => {
            try {
                const res = await axios.get(`${APPLICATION_API_END_POINT}/${jobId}/applicants`, {
                    withCredentials: true
                });
                if (res.data.success) {
                    dispatch(setApplicants(res.data.job));
                }
            } catch (error) {
                console.log(error);
                toast.error(error.response.data.message);
            }
        }
        fetchAllApplicants();
    }, [])

}
