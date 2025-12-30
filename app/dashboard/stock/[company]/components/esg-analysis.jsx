import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Landmark, Leaf, Sprout, Users } from 'lucide-react';
import DataHeader from './data-header';

const EsgAnalysis = () => {
    const score = 91;
    const progressData = [
        {
            label: 'Environmental',
            icon: Leaf,
            value: 73,
            badge: 'Strong',
            color: 'bg-[#1D7A73]',
            rank: 'Rank in Industry: 24 out of 380',
            average: 'Industry Average: 64',
        },
        {
            label: 'Social',
            icon: Users,
            value: 79,
            badge: 'Strong',
            color: 'bg-[#6366F1]',
            rank: 'Rank in Industry: 21 out of 380',
            average: 'Industry Average: 71',
        },
        {
            label: 'Governance',
            icon: Landmark,
            value: 77,
            badge: 'Strong',
            color: 'bg-[#C25413]',
            rank: 'Rank in Industry: 21 out of 380',
            average: 'Industry Average: 71',
        },
    ];

    const years = [
        { label: '2021', value: 72 },
        { label: '2022', value: 64 },
        { label: '2023', value: 80 },
        { label: '2024', value: 84 },
    ];

    const maxVal = 100;

    return (
        <Card className='border-border bg-card shadow-sm rounded-3xl'>
            <CardContent className='p-6 sm:p-8'>
                <DataHeader
                    title='ESG Analysis'
                    icon={<Sprout className='size-6 text-primary' />}
                />

                {/* Intro Text */}
                <p className='text-[14px] text-tertiary leading-[1.6] mb-8'>
                    ESG analysis evaluates how companies manage environmental,
                    social, and governance factors that can affect their
                    long-term performance. It helps investors see beyond
                    financial results — understanding how responsibly a company
                    operates, treats people, and prepares for future risks.
                </p>

                {/* Main Rating Card */}
                <div className='border border-border/60 rounded-2xl p-6 flex items-center gap-6 mb-10'>
                    <div className='relative h-20 w-20 shrink-0'>
                        <svg
                            className='h-full w-full -rotate-90'
                            viewBox='0 0 36 36'>
                            <circle
                                className='text-muted/30'
                                stroke='currentColor'
                                strokeWidth='3'
                                fill='transparent'
                                r='16'
                                cx='18'
                                cy='18'
                            />
                            <circle
                                className='text-[#007047]'
                                stroke='currentColor'
                                strokeWidth='3'
                                strokeDasharray='91, 100'
                                strokeLinecap='round'
                                fill='transparent'
                                r='16'
                                cx='18'
                                cy='18'
                            />
                        </svg>
                        <div className='absolute inset-0 flex items-center justify-center text-[24px] font-extrabold text-foreground'>
                            {score}
                        </div>
                    </div>
                    <div className='flex flex-col gap-1.5'>
                        <div className='flex items-center gap-3'>
                            <Badge className='bg-[#007047] hover:bg-[#007047] text-white px-3 py-0.5 rounded-full text-[12px] font-bold border-none shadow-none'>
                                Leader
                            </Badge>
                            <span className='text-[16px] font-bold text-foreground'>
                                ESG Rating
                            </span>
                        </div>
                        <p className='text-[13px] text-tertiary font-medium'>
                            Rank in Industry: 24 out of 380
                        </p>
                    </div>
                </div>

                {/* Metrics Breakdown */}
                <div className='space-y-8 mb-10'>
                    {progressData.map((item, idx) => (
                        <div key={idx} className='group'>
                            <div className='flex items-center justify-between mb-3'>
                                <div className='flex items-center gap-2.5'>
                                    <item.icon
                                        className={cn(
                                            'size-4',
                                            idx === 0
                                                ? 'text-[#1D7A73]'
                                                : idx === 1
                                                ? 'text-[#6366F1]'
                                                : 'text-[#C25413]'
                                        )}
                                    />
                                    <span className='text-[14px] font-normal text-foreground'>
                                        {item.label}
                                    </span>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <span className='text-[14px] font-medium text-foreground'>
                                        {item.value}
                                    </span>
                                    <Badge className='bg-[#EBF9F2] hover:bg-[#EBF9F2] text-[#007047] px-2.5 py-0 border-none rounded-full text-[11px] font-extrabold'>
                                        Strong
                                    </Badge>
                                </div>
                            </div>

                            {/* Custom Progress Bar with Industry Marker */}
                            <div className='relative w-full h-3 bg-muted/40 rounded-full mb-3'>
                                <div
                                    className={cn(
                                        'absolute top-0 left-0 h-full rounded-full transition-all duration-1000',
                                        item.color
                                    )}
                                    style={{ width: `${item.value}%` }}
                                />
                                {/* Thumb/Indicator */}
                                <div
                                    className='absolute top-[14px] -translate-y-1/2 w-4 h-4 rounded-full bg-white border-[3px] border-tertiary/40 shadow-sm z-10'
                                    style={{
                                        left: `${item.value}%`,
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                />
                            </div>

                            <div className='flex flex-col gap-1'>
                                <p className='text-[12px] text-tertiary font-medium'>
                                    {item.rank}
                                </p>
                                <div className='flex items-center gap-2 text-[12px] text-tertiary font-medium'>
                                    <div className='size-2 rounded-full bg-tertiary/40' />
                                    {item.average}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tab Navigation */}
                <div className='flex gap-6 border-b border-border/40 mb-6 overflow-x-auto no-scrollbar'>
                    {['OVERVIEW', 'KEY FACTORS', 'PEERS', 'RISK FACTORS'].map(
                        (tab, i) => (
                            <button
                                key={tab}
                                className={cn(
                                    'pb-3 text-[14px] font-normal tracking-tight border-b-2 transition-colors whitespace-nowrap',
                                    i === 0
                                        ? 'text-foreground border-primary'
                                        : 'text-tertiary border-transparent hover:text-foreground/80'
                                )}>
                                {tab}
                            </button>
                        )
                    )}
                </div>

                {/* Analysis Snippet */}
                <div className='text-[14px] leading-relaxed text-tertiary font-medium mb-8'>
                    In the Chemicals industry, the company stands out for its
                    leadership in environmental, social, and governance (ESG)
                    factors, making it a responsible investment choice for
                    investors who prioritize well-rounded sustainability.
                </div>

                <div className='flex justify-center mb-12'>
                    <button className='text-[14px] font-bold text-primary hover:underline transition-all inline-flex items-center gap-1'>
                        Read Full Analysis
                    </button>
                </div>

                {/* Progress Chart Section */}
                <div className='mt-4 pt-4'>
                    <h3 className='text-[16px] font-extrabold text-foreground mb-10'>
                        ESG Score Progression (2019-2022)
                    </h3>
                    <div className='h-56 w-full flex items-end justify-between px-2 relative pr-4'>
                        {/* Y Axis Grid & Labels */}
                        <div className='absolute inset-0 flex flex-col justify-between pointer-events-none'>
                            {[100, 75, 50, 25, 0].map(val => (
                                <div
                                    key={val}
                                    className='w-full h-0 flex items-center'>
                                    <span className='text-[11px] text-tertiary/60 font-medium w-8 -ml-10 text-right'>
                                        {val}
                                    </span>
                                    <div className='flex-1 border-t border-border/40' />
                                </div>
                            ))}
                        </div>

                        {years.map((year, i) => (
                            <div
                                key={i}
                                className='flex-1 flex flex-col justify-end items-center relative z-10 h-full'>
                                <div className='flex flex-col items-center gap-2 h-full justify-end'>
                                    <span className='text-[13px] font-bold text-foreground'>
                                        {year.value}
                                    </span>
                                    <div
                                        className='w-10 rounded-md bg-[#2B6CEF] transition-all hover:bg-[#2B6CEF]/90 shadow-sm'
                                        style={{
                                            height: `${
                                                (year.value / maxVal) * 100
                                            }%`,
                                        }}
                                    />
                                    <span className='text-[12px] text-tertiary font-semibold mt-2'>
                                        {year.label}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default EsgAnalysis;

