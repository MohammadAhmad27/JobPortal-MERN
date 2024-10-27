import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

export default function ProtectedClientRoute({ children }) {
    const { user } = useSelector(store => store.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user === null) {
            navigate('/login');
        }
        if (user?.role !== 'student') {
            navigate('/');
        }

    }, [])


    return (
        <>
            {children}
        </>
    )
}