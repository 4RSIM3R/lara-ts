import { Button } from "@/components/ui/button";
import { AppLayout } from "@/layouts/app-layout";
import { Link } from "@inertiajs/react";

export default function TransactionSuccess() {

    return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-xl font-semibold">IndTra</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Terimakasih</h1>
                <p className="mt-6 text-base leading-7 text-gray-600">Pesanan anda akan diproses, harap lakukan pembayaran di kasir</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link href={route('home')} >
                        <Button variant='custom' >
                            Kembali Ke Beranda
                        </Button>
                    </Link>
                    <a href="#" className="text-sm font-semibold text-gray-900">
                        Contact support <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </main>
    )

}

TransactionSuccess.layout = (page: any) => <AppLayout children={page} />;