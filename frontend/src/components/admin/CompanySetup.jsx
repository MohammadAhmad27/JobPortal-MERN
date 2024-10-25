import React, { useState, useEffect } from 'react'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { ArrowBigLeft } from 'lucide-react'
import { toast } from 'sonner'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { setSingleCompany } from '@/redux/companySlice'
import { useNavigate, useParams } from 'react-router-dom'
import { Loader2 } from 'lucide-react'


export default function CompanySetup() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const params = useParams();
    const companyId = params.id;
    const navigate = useNavigate();
    const { singleCompany } = useSelector(store => store.company);

    const [input, setInput] = useState({
        name: '',
        description: '',
        website: '',
        location: '',
        file: null
    });

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        setInput({ ...input, file });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', input.name);
        formData.append('description', input.description);
        formData.append('website', input.website);
        formData.append('location', input.location);
        if (input.file) {
            formData.append('file', input.file);
        }
        try {
            setLoading(true);
            const res = await axios.put(`${COMPANY_API_END_POINT}/update/${companyId}`, { formData }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true
            });
            if (res.data.success) {
                dispatch(setSingleCompany(res.data.company));
                toast.success(res.data.message);
                navigate('/admin/companies');
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setInput({
            name: singleCompany?.name || '',
            description: singleCompany?.description || '',
            website: singleCompany?.website || '',
            location: singleCompany?.location || '',
            file: singleCompany?.file || null
        });

    }, [singleCompany]);

    return (
        <>
            <Navbar />
            <div className='max-w-xl mx-auto  my-10'>
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center gap-5 p-8">
                        <Button
                            variant='outline'
                            onClick={() => navigate('/admin/companies')}
                            className='flex items-center gap-2 text-gray-500 font-semibold'>
                            <ArrowBigLeft />
                            <span>Back</span>
                        </Button>
                        <h1 className='font-bold text-xl'>Company Setup</h1>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <Label>Company Name</Label>
                            <Input
                                className='my-2'
                                type='text'
                                name='name'
                                value={input.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label>Description</Label>
                            <Input
                                className='my-2'
                                type='text'
                                name='description'
                                value={input.description}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label>Website</Label>
                            <Input
                                className='my-2'
                                type='text'
                                name='website'
                                value={input.website}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label>Location</Label>
                            <Input
                                className='my-2'
                                type='text'
                                name='location'
                                value={input.location}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label>Logo</Label>
                            <Input
                                className='my-2'
                                type='file'
                                name='file'
                                accept='image/*'
                                value={input.file}
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
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
                </form>
            </div>
        </>
    )
}
