import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from '../ui/button'

export default function CategoryCarousel() {
    const category = [
        "Frontend Developer",
        "Backend Developer",
        "UI/UX Designer",
        "QA Engineer",
        "Full Stack Developer"
    ];
    return (
        <div>
            <Carousel className='w-full max-w-xl mx-auto my-20'>
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem className='md:basis-1/2 lg:basis-1/3' key={index}>
                                <Button variant='outline' className='rounded-full'>{cat}</Button>
                            </CarouselItem>
                        ))

                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    )
}
