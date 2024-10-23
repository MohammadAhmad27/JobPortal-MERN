import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '../ui/dialog'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'sonner'
import { USER_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { setUser, setLoading } from '@/redux/authSlice'

export default function UpdateProfileDialog({ open, setOpen }) {
    const { loading, user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        fullname: user?.fullname || '',
        email: user?.email || '',
        phoneNumber: user?.phoneNumber || '',
        bio: user?.profile?.bio || '',
        skills: user?.profile?.skills?.map(skill => skill) || '',
        file: user?.profile?.resume || ''
    });

    const handleChange = (e) => {
        setInput((input) => ({ ...input, [e.target.name]: e.target.value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        setInput({ ...input, file })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('fullname', input.fullname);
        formData.append('email', input.email);
        formData.append('phoneNumber', input.phoneNumber);
        formData.append('bio', input.bio);
        formData.append('skills', input.skills);
        if (input.file) {
            formData.append('file', input.file);
        }
        try {
            dispatch(setLoading(true));
            const res = await axios.put(`${USER_API_END_POINT}/profile/update`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                toast.success(res.data.message);
            }
            console.log(res);
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            dispatch(setLoading(false));
            setOpen(false);
        }
    };


    return (
        <div>
            <Dialog open={open}>
                <DialogTrigger asChild>
                    <Button variant="outline">Edit Profile</Button>
                </DialogTrigger>
                <DialogContent className="max-w-[425px] rounded-xl" onInteractOutside={() => setOpen(false)}>
                    <DialogHeader>
                        <DialogTitle>Update Profile</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-4 py-4">
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor='name'>Name:</Label>
                                <Input
                                    id='name'
                                    name='fullname'
                                    type='text'
                                    value={input.fullname}
                                    className='col-span-3'
                                    onChange={handleChange}

                                />
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor='email'>Email:</Label>
                                <Input
                                    id='email'
                                    name='email'
                                    type='email'
                                    value={input.email}
                                    className='col-span-3'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor='number'>Number:</Label>
                                <Input
                                    id='number'
                                    name='phoneNumber'
                                    type='text'
                                    value={input.phoneNumber}
                                    className='col-span-3'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor='bio'>Bio:</Label>
                                <Input
                                    id='bio'
                                    name='bio'
                                    type='text'
                                    value={input.bio}
                                    className='col-span-3'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor='skills'>Skills:</Label>
                                <Input
                                    id='skills'
                                    name='skills'
                                    type='text'
                                    value={input.skills}
                                    className='col-span-3'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="file">Resume</Label>
                                <div className="col-span-3">
                                    {input.file && typeof input.file === 'string' && (
                                        <div className="mb-2">
                                            <span className="text-sm">Current File: {user?.profile?.resumeOriginalName}</span>
                                        </div>
                                    )}
                                    <Input
                                        id="file"
                                        name="file"
                                        type="file"
                                        accept=".pdf,.PDF,application/pdf,.doc,.docx,image/*"
                                        onChange={handleFileChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <DialogFooter>
                            {
                                loading ? (
                                    <Button className='w-full mb-2'><Loader2 className='animate-spin size-4 mr-2' />Please wait!</Button>
                                ) : (
                                    <Button
                                        className='w-full mb-2'
                                        type='submit'>
                                        Update
                                    </Button>
                                )
                            }
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}
