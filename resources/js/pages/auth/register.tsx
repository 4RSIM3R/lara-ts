import React from 'react';
import { InputError } from '@/components/input-error';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useForm } from '@inertiajs/react';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const { toast } = useToast();


    const onChange = (event: { target: { name: any; value: any } }) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        post(route('register.store'), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                toast({
                    title: 'Registrasi Berhasil',
                    description: 'Silahkan login untuk melakukan transaksi',
                });
            },
            onError: (error) => {
                toast({
                    title: 'Registrasi Gagal',
                    description: Object.keys(error)[0],
                    variant: "destructive"
                });
            },
        });
    };

    return (
        <>
            <Toaster />
            <div className='w-full h-screen overflow-hidden bg-[url("/assets/bg.jpeg")] flex flex-col items-center justify-center ' >
                <form onSubmit={submit} className='max-w-sm space-y-4' >
                    <div className='text-center text-white' >
                        <p className='text-2xl font-medium mb-2' >Daftar</p>
                        <p className='' >Daftar sekarang untuk tahu menu andalan kita yang memiliki cita rasa nusantara</p>
                    </div>
                    <div>
                        <Label htmlFor='name' className='text-white'>Nama Lengkap</Label>
                        <Input
                            type='text'
                            name='name'
                            value={data.name}
                            className='mt-1'
                            autoComplete='off'
                            autoFocus
                            onChange={onChange}
                        />

                        <InputError message={errors.name} className='mt-2' />
                    </div>
                    <div>
                        <Label htmlFor='email' className='text-white'>Email</Label>

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
                        <Label htmlFor='password' className='text-white'>Kata Sandi</Label>

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
                    <div>
                        <Label htmlFor='name' className='text-white'>Konfirmasi Kata Sandi</Label>

                        <Input
                            type='password'
                            name='password_confirmation'
                            value={data.password_confirmation}
                            className='mt-1'
                            autoComplete='off'
                            autoFocus
                            onChange={onChange}
                        />

                        <InputError message={errors.password_confirmation} className='mt-2' />
                    </div>
                    <Button variant='custom' className='w-full' disabled={processing} type='submit'>
                        Register
                    </Button>
                    <div className='text-center' >
                        <Link href='' className='text-sm text-foreground hover:underline text-white'>
                            Sudah mempunyai akun? <a href='login' className='font-medium' >Masuk</a>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

Register.layout = (page: React.ReactNode) => {
    return page;
};
