import React, { PropsWithChildren } from 'react';
import Navbar from '@/layouts/partials/navbar';
import Footer from '@/layouts/partials/footer';
import { Toaster } from '@/components/ui/toaster';

type AppLayoutProps = {
    children: string | JSX.Element | JSX.Element[] | React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
    return (
        <div>
            <Toaster />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
