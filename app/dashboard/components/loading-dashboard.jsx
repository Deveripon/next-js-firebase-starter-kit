import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function DashboardLoading() {
    return (
        <div
            suppressHydrationWarning
            className='flex h-screen w-full overflow-hidden bg-[#f9fafb]'>
            {' '}
            {/* Subtle grayish background */}
            {/* 1. Sidebar Skeleton (Grayish Sidebar) */}
            <aside className='hidden w-64 flex-col border-r bg-white md:flex'>
                <div className='p-6'>
                    <Skeleton className='h-6 w-24 bg-slate-200' />
                </div>
                <div className='flex-1 space-y-2 px-4'>
                    {[...Array(5)].map((_, i) => (
                        <Skeleton
                            key={i}
                            className='h-9 w-full rounded-md bg-slate-100/80'
                        />
                    ))}
                </div>
                <div className='p-4 space-y-6 border-t border-slate-100'>
                    <div className='space-y-2'>
                        <Skeleton className='h-8 w-full bg-slate-100' />
                        <Skeleton className='h-8 w-full bg-slate-100' />
                    </div>
                    <div className='flex items-center gap-3 pt-2'>
                        <Skeleton className='h-10 w-10 rounded-full bg-slate-200' />
                        <div className='space-y-1.5'>
                            <Skeleton className='h-3 w-12 bg-slate-200' />
                            <Skeleton className='h-3 w-20 bg-slate-100' />
                        </div>
                    </div>
                </div>
            </aside>
            {/* 2. Main Content Area */}
            <main className='flex flex-1 flex-col overflow-y-auto p-8 space-y-8'>
                {/* Breadcrumb handle */}
                <Skeleton className='h-4 w-4 bg-slate-200 rounded-sm' />

                {/* 3. Main Chart Card */}
                <Card className='border-slate-200 shadow-sm'>
                    <div className='p-6 pb-0 flex items-center justify-between'>
                        <div className='space-y-2'>
                            <Skeleton className='h-5 w-32 bg-slate-200' />
                            <Skeleton className='h-4 w-48 bg-slate-100' />
                        </div>
                        <div className='flex gap-1 bg-slate-100 p-1 rounded-lg'>
                            <Skeleton className='h-7 w-20 bg-white shadow-sm' />
                            <Skeleton className='h-7 w-20 bg-transparent' />
                            <Skeleton className='h-7 w-20 bg-transparent' />
                        </div>
                    </div>
                    <CardContent className='p-6'>
                        {/* The Chart area */}
                        <div className='relative h-[240px] w-full flex items-end gap-2 px-2'>
                            {[...Array(20)].map((_, i) => (
                                <Skeleton
                                    key={i}
                                    className='flex-1 bg-slate-100'
                                    style={{
                                        height: `${
                                            Math.floor(Math.random() * 60) + 20
                                        }%`,
                                    }}
                                />
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* 4. Filter Tabs Row */}
                <div className='flex items-center justify-between'>
                    <div className='flex gap-2'>
                        <Skeleton className='h-8 w-20 rounded-full bg-slate-200' />
                        <Skeleton className='h-8 w-32 rounded-full bg-slate-100' />
                        <Skeleton className='h-8 w-28 rounded-full bg-slate-100' />
                        <Skeleton className='h-8 w-36 rounded-full bg-slate-100' />
                    </div>
                    <div className='flex gap-2'>
                        <Skeleton className='h-9 w-36 border border-slate-200 bg-white' />
                        <Skeleton className='h-9 w-28 bg-slate-900' />{' '}
                        {/* Add Section button */}
                    </div>
                </div>

                {/* 5. Data Table Skeleton */}
                <div className='rounded-xl border border-slate-200 bg-white overflow-hidden'>
                    <div className='grid grid-cols-6 gap-4 border-b border-slate-100 bg-slate-50/50 p-4'>
                        {[...Array(6)].map((_, i) => (
                            <Skeleton
                                key={i}
                                className='h-4 w-20 bg-slate-200'
                            />
                        ))}
                    </div>
                    <div className='divide-y divide-slate-50'>
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className='grid grid-cols-6 gap-4 p-4 items-center'>
                                <div className='flex items-center gap-3'>
                                    <Skeleton className='h-4 w-4 rounded bg-slate-200' />
                                    <Skeleton className='h-4 w-24 bg-slate-100' />
                                </div>
                                <Skeleton className='h-6 w-20 rounded-full bg-slate-100' />
                                <Skeleton className='h-6 w-16 rounded-full bg-slate-50' />
                                <Skeleton className='h-4 w-8 bg-slate-100' />
                                <Skeleton className='h-4 w-8 bg-slate-100' />
                                <div className='flex justify-between items-center'>
                                    <Skeleton className='h-4 w-24 bg-slate-100' />
                                    <Skeleton className='h-4 w-1 bg-slate-200' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

