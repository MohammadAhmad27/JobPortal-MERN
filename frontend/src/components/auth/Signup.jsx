import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Signup() {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });
    const changeEventHandler = (e) => {
        setInput((input) => ({ ...input, [e.target.name]: e.target.value }));
    };
    const changeFileHandler = (e) => {
        setInput((input) => ({ ...input, file: e.target.files?.[0] }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(input);
    };
    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center max-w-7xl mx-auto">
                <form onSubmit={handleSubmit}
                    className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
                    <div className='my-2'>
                        <Label>Full Name</Label>
                        <Input
                            type='text'
                            value={input.fullname}
                            name='fullname'
                            onChange={changeEventHandler}
                            placeholder='Enter full name'
                        />
                        <Label>Email</Label>
                        <Input
                            type='email'
                            value={input.email}
                            name='email'
                            onChange={changeEventHandler}
                            placeholder='abc@gmail.com'
                        />
                        <Label>Phone Number</Label>
                        <Input
                            type='number'
                            value={input.phoneNumber}
                            name='phoneNumber'
                            onChange={changeEventHandler}
                            placeholder='Enter phone number'
                        />
                        <Label>Password</Label>
                        <Input
                            type='password'
                            value={input.password}
                            name='password'
                            onChange={changeEventHandler}
                            placeholder='Enter password'
                        />
                    </div>
                    <div className='flex items-center justify-between'>
                        <RadioGroup className='flex items-center gap-4 my-5'>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type='radio'
                                    name='role'
                                    value='student'
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                    className='cursor-pointer'
                                />
                                <Label htmlFor="r1">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type='radio'
                                    name='role'
                                    value='recruiter'
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandler}
                                    className='cursor-pointer'
                                />
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>
                        </RadioGroup>
                        <div className="flex items-center gap-2">
                            <Label>Profile</Label>
                            <Input
                                accept='image/*'
                                type='file'
                                className='cursor-pointer'
                                onChange={changeFileHandler}
                            />
                        </div>
                    </div>
                    <Button
                        className='w-full my-4'
                        type='submit'>
                        Submit
                    </Button>
                    <span className='text-sm'>Already have an account? <Link to={'/login'} className='text-blue-600'>Login</Link></span>
                </form>
            </div>
        </div>
    )
}
