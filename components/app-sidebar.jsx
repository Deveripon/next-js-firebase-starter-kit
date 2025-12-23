'use client';

import {
    IconChartBar,
    IconDashboard,
    IconFolder,
    IconHelp,
    IconListDetails,
    IconSearch,
    IconSettings,
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
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import Image from 'next/image';
import Link from 'next/link';

const data = {
    user: {
        name: 'admin',
        email: 'admin@example.com',
        avatar: '/logo.svg',
    },
    navMain: [
        {
            title: 'Dashboard',
            url: '#',
            icon: IconDashboard,
        },
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
                        <SidebarMenuButton
                            asChild
                            className='data-[slot=sidebar-menu-button]:p-1.5!'>
                            <Link href='#'>
                                <Image
                                    src='/logo.svg'
                                    alt='Logo'
                                    width={32}
                                    height={32}
                                />
                                <span className='text-base font-semibold'>
                                    Stoxie
                                </span>
                            </Link>
                        </SidebarMenuButton>
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

