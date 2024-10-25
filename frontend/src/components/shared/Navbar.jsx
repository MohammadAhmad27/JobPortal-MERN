import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { LogOut, User2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import { setLoading, setUser } from '@/redux/authSlice'
import { USER_API_END_POINT } from '@/utils/constant'
import axios from 'axios'

export default function Navbar() {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            dispatch(setLoading(true));
            const res = await axios.get(`${USER_API_END_POINT}/logout`, {
                withCredentials: true
            });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate('/');
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        } finally {
            dispatch(setLoading(false));
        }
    };
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
                        {
                            user && user?.role === 'recruiter' ? (
                                <>
                                    <li> <Link to={'/admin/companies'}>Companies</Link></li>
                                    <li><Link to={'/admin/jobs'}>Jobs</Link></li>
                                </>
                            ) : (
                                <>
                                    <li> <Link to={'/'}>Home</Link></li>
                                    <li><Link to={'/jobs'}>Jobs</Link></li>
                                    <li><Link to={'/browse'}>Browse</Link></li>
                                </>
                            )
                        }
                    </ul>

                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                <Link to={'/login'}><Button variant='outline'>Login</Button></Link>
                                <Link to={'/signup'}><Button className='bg-[#6A38C2] hover:bg-[#5b30A6]'>Signup </Button>
                                </Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger>
                                    <Avatar className='cursor-pointer'>
                                        <AvatarImage src={user?.profile?.profilePhoto} />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className='w-80'>
                                    <div className="flex items-center space-y-2 gap-4">
                                        <Avatar className='cursor-pointer'>
                                            <AvatarImage src={user?.profile?.profilePhoto} />
                                        </Avatar>
                                        <div>
                                            <h4>{user.fullname}</h4>
                                            <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col text-gray-600'>
                                        {
                                            user && user?.role === 'student' && (
                                                <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                    <User2 />
                                                    <Button variant='link'><Link to={'/profile'}>View Profile</Link></Button>
                                                </div>
                                            )
                                        }

                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <LogOut />
                                            <Button onClick={handleLogout} variant='link'>Logout</Button>
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
