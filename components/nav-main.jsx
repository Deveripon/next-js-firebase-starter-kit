'use client';

import { SelectAnalysisType } from '@/app/dashboard/components/select-analysis';
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { IconDashboard } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

export function NavMain({ items }) {
    const router = useRouter();
    return (
        <SidebarGroup>
            <SidebarGroupContent className='flex flex-col gap-2'>
                <SidebarMenu>
                    <SidebarMenuItem className='flex items-center gap-2'>
                        <SidebarMenuButton
                            onClick={() => router.push('/dashboard')}
                            tooltip='Dashboard'>
                            <IconDashboard size={20} />
                            <span>Dashboard</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
                <SidebarMenu>
                    {items.map(item => (
                        <SidebarMenuItem
                            key={item.title}
                            className={cn(item.className)}>
                            <SidebarMenuButton
                                onClick={() => router.push(item.url)}
                                tooltip={item.title}>
                                {item.icon && <item.icon />}
                                <span>{item.title}</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                    <SidebarMenuItem className='flex lg:hidden items-center gap-2'>
                        <SelectAnalysisType isSidebar />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}

