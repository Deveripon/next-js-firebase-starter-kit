'use client';

import {
    IconChartBar,
    IconCompass,
    IconFolder,
    IconHelp,
    IconListDetails,
    IconSearch,
    IconSettings,
    IconSparkles,
    IconUsers,
} from '@tabler/icons-react';

import { NavMain } from '@/components/nav-main';
import { NavSecondary } from '@/components/nav-secondary';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { IconChartHistogram } from '@tabler/icons-react';
const data = {
    user: {
        name: 'admin',
        email: 'admin@example.com',
        avatar: '/logo.svg',
    },
    navMain: [
        {
            title: 'Lifecycle',
            url: '#',
            icon: IconListDetails,
        },
        {
            title: 'Analytics',
            url: '#',
            icon: IconChartBar,
        },
        {
            title: 'Projects',
            url: '#',
            icon: IconFolder,
        },
        {
            title: 'Team',
            url: '#',
            icon: IconUsers,
        },
        {
            title: 'Market Overview',
            url: '/dashboard/market-overview',
            icon: IconChartHistogram,
        },
        {
            title: 'Discover',
            url: '#',
            icon: IconCompass,
            className: 'lg:hidden',
        },
        {
            title: 'Bridget AI',
            url: '#',
            icon: IconSparkles,
            className: 'lg:hidden',
        },
    ],

    navSecondary: [
        {
            title: 'Settings',
            url: '#',
            icon: IconSettings,
        },
        {
            title: 'Get Help',
            url: '#',
            icon: IconHelp,
        },
        {
            title: 'Search',
            url: '#',
            icon: IconSearch,
        },
    ],
};

export function AppSidebar({ user, ...props }) {
    console.log(user);
    const loggedUser = {
        name: user?.displayName || 'admin',
        email: user?.email,
        photoURL: user?.photoURL || '/logo.svg',
    };
    return (
        <Sidebar collapsible='offcanvas' {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        {/*<SidebarMenuButton
                            asChild
                            className='data-[slot=sidebar-menu-button]:p-1.5!'>
                            <div className='flex items-center'>
                                <Link
                                    href='/widget'
                                    className='h-full w-[30px] flex items-center gap-2'>
                                    <Image
                                        src={logo}
                                        alt='Logo'
                                        width={30}
                                        height={30}
                                    />
                                    <span className='text-xl font-semibold'>
                                        Stoxie
                                    </span>
                                </Link>
                            </div>
                        </SidebarMenuButton> */}
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />

                <NavSecondary items={data.navSecondary} className='mt-auto' />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={loggedUser} />
            </SidebarFooter>
        </Sidebar>
    );
}

