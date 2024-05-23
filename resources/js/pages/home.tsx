import { ItemCard } from '@/components/item-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AppLayout } from '@/layouts/app-layout';
import { Category } from '@/types/model/category';
import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';


type HomeProps = {
    categories: Category[],
    items: Item[],
    recommendations: Item[]
}

export default function Home({ categories, items, recommendations }: HomeProps) {

    const [category, setCategory] = useState<any>();
    const [search, setSearch] = useState<any>();
    const current = route().current()?.toString;

    useEffect(() => {
        router.get('', { category_id: category }, {
            preserveState: true,
            preserveScroll: true,
            replace: true,
        });

    }, [category]);

    useEffect(() => {
        router.get('', { search: search }, {
            preserveState: true,
            preserveScroll: true,
            replace: true,
        });

    }, [search]);


    return (
        <>
            <div className="relative h-screen isolate overflow-hidden pt-14 text-white">
                <img
                    src="/assets/bg.jpeg"
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="mx-auto max-w-7xl py-32 sm:py-48">
                    <div className="max-w-xl space-y-4">
                        <h1 className="text-6xl font-bold">
                            Indonesia
                        </h1>
                        <p className=" text-3xl font-semibold text-[#D28200]">
                            Traditional Resto
                        </p>
                        <p className='text-xl' >
                            Sebuah restoran yang menyajikan masakan tradisional
                            Indonesia, dengan <span className='text-[#D28200]' >menu-menu khas dari berbagai daerah di Indonesia</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='pt-14 mx-auto max-w-7xl' >
                <div className='flex flex-col sm:flex-row justify-start sm:justify-between items-center' >
                    <div className='flex space-x-2' >
                        {
                            categories.map(e => (
                                <>
                                    <Button key={e.id} onClick={() => setCategory(e.id)} variant={e.id == category ? 'custom' : 'outline_custom'}  >
                                        {e.name}
                                    </Button>
                                </>)
                            )
                        }
                    </div>
                    <div className='w-96' >
                        <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Cari makanan' />
                    </div>
                </div>
                <div className='grid grid-cols-12 gap-8 mt-8' >
                    {
                        items.map(e => (<>
                            <ItemCard item={e} />
                        </>))
                    }
                </div>
            </div>
            <div className='pt-14 text-white' >
                <div className='max-w-7xl mx-auto bg-[url("/assets/bg.jpeg")] px-16 py-8 rounded-md' >
                    <div className='text-center space-y-8' >
                        <p className='text-2xl font-semibold' >Best Seller</p>
                        <div className='grid grid-cols-12 gap-8' >
                            {
                                recommendations.map(e => (<>
                                    <ItemCard item={e} />
                                </>))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-14' >
                <div className="mx-auto py-8 bg-gray-900 grid max-w-7xl grid-cols-1 px-6 lg:grid-cols-12 gap-8 rounded-md">
                    <div className="max-w-md text-white lg:col-span-7 flex flex-col justify-center space-y-4">
                        <div>
                            <img
                                className="h-5 w-auto object-cover"
                                src="/assets/main_logo.png"
                                alt=""
                            />
                        </div>
                        <p className="text-lg">
                            Daftar sekarang untuk tahu menu andalan kita yang memiliki cita rasa nusantara
                        </p>
                        <div className='w-96' >
                            <Button variant='custom' >
                                Pesan Sekarang
                            </Button>
                        </div>
                    </div>
                    <div className="w-full max-w-md lg:col-span-5">
                        <img className='h-full rounded-md' src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

Home.layout = (page: any) => <AppLayout children={page} />;
