import React from 'react'
import Navbar from '../components/shared/Navbar'
import HeroSection from '../components/home/HeroSection'
import CategoryCarousel from '../components/home/CategoryCarousel'
import LatestJobs from '../components/home/LatestJobs'
import Footer from '../components/shared/Footer'
export default function Home() {
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
