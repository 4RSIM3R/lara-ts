import { Button } from "@/components/ui/button";
import { bg_food } from "@/constant/constant";
import { AppLayout } from "@/layouts/app-layout";
import { Cart } from "@/types/model/cart";
import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import { useState } from "react";

type CartAllProps = {
    data: Cart[]
};

export default function CartAll({ data }: CartAllProps) {

    const [cart, setCart] = useState<Cart[]>(data);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0">
                <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Keranjang Belanja</h1>

                <form className="mt-12">
                    <section aria-labelledby="cart-heading">
                        <h2 id="cart-heading" className="sr-only">
                            List Belanjaan Anda
                        </h2>

                        <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
                            {cart.map((product) => (
                                <li key={product.id} className="flex py-6">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={bg_food}
                                            className="h-24 w-24 rounded-md object-cover object-center"
                                        />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                                        <div>
                                            <div className="flex justify-between">
                                                <h4 className="">
                                                    <a href="" className="font-medium text-gray-700 hover:text-gray-800">
                                                        {product.item?.name}
                                                    </a>
                                                    <p className="text-sm mt-2 text-gray-900">{product.item?.description}</p>
                                                </h4>
                                                <p className="ml-4 text-sm font-medium text-gray-900">{product.item?.price}</p>
                                            </div>

                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Order summary */}
                    <section aria-labelledby="summary-heading" className="mt-10">
                        <h2 id="summary-heading" className="sr-only">
                            Order summary
                        </h2>

                        <div>
                            <dl className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <dt className="text-base font-medium text-gray-900">Total</dt>
                                    <dd className="ml-4 text-base font-medium text-gray-900">
                                        {data.reduce((n, { item }) => n + (item?.price ?? 0), 0)}
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        <div className="mt-10">
                            <Link href={route('transaction.success')} >
                                <Button variant='custom' className="w-full" >
                                    Checkout
                                </Button>
                            </Link>
                        </div>

                    </section>
                </form>
            </div>
        </div>
    )
}

CartAll.layout = (page: any) => <AppLayout children={page} />;