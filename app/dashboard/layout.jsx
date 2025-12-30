'use client';
import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

import { useAuth } from '@/context/auth-context';
import { Roboto } from 'next/font/google';
import { redirect } from 'next/navigation';
import DashboardLoading from './components/loading-dashboard';
const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
});

export default function DashboardLayout({ children }) {
    const { user, loading } = useAuth();
    if (loading) return <DashboardLoading />;
    if (!user) redirect('/login');

    return (
        <SidebarProvider
            className={`${roboto.className} min-h-screen admin-dashboard bg-background text-foreground antialiased selection:bg-primary/20`}
            style={{
                '--sidebar-width': 'calc(var(--spacing) * 72)',
                '--header-height': 'calc(var(--spacing) * 18)',
            }}>
            <AppSidebar user={user} variant='inset' />
            <SidebarInset>
                <SiteHeader />
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
}

