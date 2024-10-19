import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { LogOut, User2 } from 'lucide-react'

export default function Navbar() {
    const user = false;
    return (
        <div className='bg-white'>
            <div className="flex items-center justify-between h-16 mx-10 max-w-7xl">
                <div>
                    <h1 className='text-2xl font-bold'>
                        Job <span className='text-[#F83002]'>Portal</span>
                    </h1>
                </div>
                <div className='flex items-center gap-5'>
                    <ul className='flex font-medium items-center gap-5'>
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Browse</li>
                    </ul>

                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                <Button variant='outline'>Login</Button>
                                <Button className='bg-[#6A38C2] hover:bg-[#5b30A6]'>Signup </Button>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger>
                                    <Avatar className='cursor-pointer'>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className='w-80'>
                                    <div className="flex space-y-2 gap-4">
                                        <Avatar className='cursor-pointer'>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                        </Avatar>
                                        <div>
                                            <h4>M.Ahmad</h4>
                                            <p className='text-sm text-muted-foreground'>lorem ipsum</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col text-gray-600'>
                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <User2 />
                                            <Button variant='link'>View Profile</Button>
                                        </div>
                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <LogOut />
                                            <Button variant='link'>View Profile</Button>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }

                </div>
            </div>

        </div>
    )
}