import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

export default function ProtectedAdminRoute({ children }) {
    const { user } = useSelector(store => store.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user === null) {
            navigate('/login');
        }
        if (user?.role !== 'recruiter') {
            navigate('/');
        }

    }, [])


    return (
        <>
            {children}
        </>
    )
}
