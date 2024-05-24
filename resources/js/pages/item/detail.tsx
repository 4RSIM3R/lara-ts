import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { AppLayout } from "@/layouts/app-layout";
import { PageProps } from "@/types";
import { Item } from "@/types/model/item";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { Link, useForm, usePage } from "@inertiajs/react";

const product = {
    name: 'Everyday Ruck Snack',
    href: '#',
    price: '$220',
    description:
        "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg',
    imageAlt: 'Model wearing light green backpack with black canvas straps and front zipper pouch.',
    breadcrumbs: [
        { id: 1, name: 'Travel', href: '#' },
        { id: 2, name: 'Bags', href: '#' },
    ],
    sizes: [
        { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
        { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
}


type ItemDetailProps = {
    data: Item,
};

export default function ItemDetail({ data }: ItemDetailProps) {

    const { auth } = usePage<PageProps>().props;

    const { post, processing, errors, reset } = useForm({
        item_id: data.id,
    });

    const { toast } = useToast();

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        post(route('cart.store'), {
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
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:max-w-lg lg:self-end">
                    <nav aria-label="Breadcrumb">
                        <ol role="list" className="flex items-center space-x-2">
                            <div className="flex items-center text-sm">
                                <a className="font-medium text-gray-500 hover:text-gray-900">
                                    {data.category?.name}
                                </a>

                            </div>
                        </ol>
                    </nav>

                    <div className="mt-4">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{data['name']}</h1>
                    </div>

                    <section aria-labelledby="information-heading" className="mt-4">
                        <h2 id="information-heading" className="sr-only">
                            Product information
                        </h2>

                        <div className="flex items-center">
                            <p className="text-lg text-gray-900 sm:text-xl">Rp {data['price']}</p>

                        </div>

                        <div className="mt-4 space-y-6">
                            <p className="text-base text-gray-500">{data['description']}</p>
                        </div>


                    </section>
                </div>

                {/* Product image */}
                <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                        <img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center" />
                    </div>
                </div>

                <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
                    <section aria-labelledby="options-heading">
                        <h2 id="options-heading" className="sr-only">
                            Product options
                        </h2>
                        <form onSubmit={submit} >
                            <input type="hidden" name="item_id" />
                            <div className="mt-10">
                                {
                                    auth.user != null ?
                                        <>
                                            <Button variant='custom' disabled={processing} >
                                                Masukkan Ke keranjang
                                            </Button>
                                        </>
                                        :
                                        <>
                                            <Link href={route('login.index')}  >
                                                <Button variant='link' type="button">
                                                    Harap Login Dahulu
                                                </Button>
                                            </Link>
                                        </>
                                }

                            </div>
                        </form>
                    </section>
                </div>


            </div>
        </div>
    )
}

ItemDetail.layout = (page: any) => <AppLayout children={page} />;