import React, { useEffect } from 'react'
import Navbar from '../components/shared/Navbar'
import HeroSection from '../components/home/HeroSection'
import CategoryCarousel from '../components/home/CategoryCarousel'
import LatestJobs from '../components/home/LatestJobs'
import Footer from '../components/shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const { user } = useSelector(store => store.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.role === 'recruiter') {
            navigate('/admin/companies');
        }
    }, [])


    useGetAllJobs();
    return (
        <>
            <Navbar />
            <HeroSection />
            <CategoryCarousel />
            <LatestJobs />
            <Footer />
        </>
    )
}
