import React from 'react';
import { InputError } from '@/components/input-error';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useForm } from '@inertiajs/react';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/hooks/use-toast';

interface LoginProps {
    status: string;
    canResetPassword: boolean;
}

export default function Login(args: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
    });


    const onChange = (event: { target: { name: any; value: any } }) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        post(route('login.store'), {
            onSuccess: (success) => {

            },
            onError: (error) => {
                toast({
                    title: 'Registrasi Gagal',
                    description: Object.keys(error)[0],
                    variant: "destructive"
                });
            }
        });
    };

    return (
        <>
            <Toaster />
            <div className='w-full h-screen overflow-hidden bg-[url("/assets/bg.jpeg")] flex flex-col items-center justify-center ' >
                <form onSubmit={submit} className='max-w-sm space-y-4' >
                    <div className='text-center text-white' >
                        <p className='text-2xl font-medium mb-2' >Masuk</p>
                        <p className='' >Masuk sekarang untuk tahu menu andalan kita yang memiliki cita rasa nusantara</p>
                    </div>
                    <div>
                        <Label htmlFor='name' className='text-white' >Email</Label>

                        <Input
                            type='text'
                            name='email'
                            value={data.email}
                            className='mt-1'
                            autoComplete='off'
                            autoFocus
                            onChange={onChange}
                        />

                        <InputError message={errors.email} className='mt-2' />
                    </div>
                    <div>
                        <Label htmlFor='name' className='text-white'>Kata Sandi</Label>

                        <Input
                            type='password'
                            name='password'
                            value={data.password}
                            className='mt-1'
                            autoComplete='off'
                            autoFocus
                            onChange={onChange}
                        />

                        <InputError message={errors.password} className='mt-2' />
                    </div>

                    <Button variant='custom' className='w-full' disabled={processing} type='submit'>
                        Login
                    </Button>
                    <div className='text-center' >
                        <Link href='' className='text-sm text-foreground hover:underline text-white'>
                            Belum mempunyai akun? <a href='/register' className='font-medium' >Daftar</a>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

Login.layout = (page: React.ReactNode) => page;
