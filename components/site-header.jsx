import WidgetHeader from '@/app/dashboard/components/widget-header';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function SiteHeader() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <header
            className={cn(
                'flex h-(--header-height) shrink-0 sticky top-0  z-50  duration-300  items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)',
                scrolled
                    ? 'border-b border-border/40 bg-background shadow-sm'
                    : 'bg-background'
            )}>
            <div className='flex w-full items-center  gap-1 px-4 lg:gap-2 lg:px-6'>
                <SidebarTrigger className='-ml-1' />
                <Separator
                    orientation='vertical'
                    className='mx-2 mt-6 data-[orientation=vertical]:h-4'
                />
                <WidgetHeader />
            </div>
        </header>
    );
}

