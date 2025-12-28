import AppleLogo from '@/app/widget/components/svgs/apple.svg';
import { Card, CardContent } from '@/components/ui/card';
import { TradeUpIcon } from '@hugeicons/core-free-icons/index';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowUpIcon, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const StockOverview = () => {
    const timeRanges = [
        { label: '5D', change: '+1.00%' },
        { label: '1M', change: '+8.20%' },
        { label: '6M', change: '+26.98%' },
        { label: 'YTD', change: '+3.03%' },
        { label: '1Y', change: '+14.34%', active: true },
        { label: '2Y', change: '+49.34%' },
        { label: '5Y', change: '+128.30%' },
    ];

    const wavyPathLine =
        'M0 240 L 15 220 L 25 245 L 40 215 L 55 235 L 70 205 L 85 225 L 105 190 L 125 210 L 145 185 L 165 205 L 185 175 L 205 195 L 230 165 L 255 185 L 280 155 L 305 175 L 330 145 L 355 165 L 380 135 L 410 160 L 440 130 L 470 155 L 500 125 L 530 100 L 560 120 L 590 90 L 620 110 L 650 80 L 685 105 L 720 75 L 755 100 L 790 70 L 825 95 L 860 65 L 895 90 L 930 60 L 965 85 L 1000 65';

    return (
        <Card className='rounded-2xl border-border bg-card shadow-sm p-2 h-auto md:h-[492px] md:max-h-[492px] flex flex-col'>
            <CardContent className='pt-6 sm:pt-8 px-6 sm:px-8 flex-1 flex flex-col min-h-0'>
                {/* Header Section */}
                <div className='flex flex-col gap-4 shrink-0'>
                    <div className='flex items-start justify-between'>
                        <div className='flex items-start gap-4'>
                            {/* Logo */}
                            <div className='flex h-[40px] w-[40px] shrink-0 items-center justify-center p-2 rounded-full border border-border bg-card shadow-sm'>
                                <Image
                                    src={AppleLogo}
                                    alt='Apple'
                                    width={40}
                                    height={40}
                                />
                            </div>

                            <div className='flex flex-col gap-1'>
                                <div className='flex items-center gap-2 flex-wrap'>
                                    <h1 className='text-[32px] font-medium leading-[40px] text-foreground tracking-tight'>
                                        Apple
                                    </h1>
                                    <span className='text-[32px] leading-[40px] font-normal text-foreground'>
                                        (AAPL)
                                    </span>
                                    <span className='inline-flex items-center rounded-full bg-very-positive px-4 py-1 text-[14px] font-bold text-white shadow-sm shadow-very-positive/20 uppercase tracking-tighter'>
                                        Buy
                                    </span>
                                </div>

                                <div className='flex flex-col gap-y-[32px]'>
                                    <div className='flex items-center gap-2 text-[14px] text-secondary font-normal flex-wrap'>
                                        <button className='flex items-center gap-1 hover:text-foreground transition-colors'>
                                            NasdaqGS
                                            <ChevronDown className='size-4' />
                                        </button>
                                        <span className='text-secondary'>
                                            •
                                        </span>
                                        <span>USD</span>
                                        <span className='text-secondary'>
                                            •
                                        </span>
                                        <span>
                                            Technology Hardware, Storage &
                                            Peripherals
                                        </span>
                                    </div>
                                    {/* Price Section */}
                                    <div className='flex flex-col gap-1'>
                                        <div className='flex items-center gap-3'>
                                            <span className='text-[32px] leading-[40px] font-bold text-foreground tracking-tight'>
                                                $258.02
                                            </span>
                                            <div className='flex items-center gap-1.5 text-very-positive font-bold text-[20px]'>
                                                <HugeiconsIcon
                                                    icon={TradeUpIcon}
                                                    className='size-6'
                                                />
                                                <span>+0.35%</span>
                                            </div>
                                        </div>
                                        <span className='text-[14px] text-tertiary font-normal tracking-tight'>
                                            Last Update: October 3, 2025
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chart Section */}
                <div className='mt-4 flex flex-col flex-1 min-h-0'>
                    <div className='relative w-full flex-1 min-h-0'>
                        <svg
                            viewBox='0 0 1000 300'
                            className='absolute inset-0 h-full w-full overflow-visible'
                            preserveAspectRatio='none'>
                            <defs>
                                <linearGradient
                                    id='chartGradient'
                                    x1='0'
                                    y1='0'
                                    x2='0'
                                    y2='1'>
                                    <stop
                                        offset='0%'
                                        className='text-very-positive'
                                        stopColor='currentColor'
                                        stopOpacity='0.2'
                                    />
                                    <stop
                                        offset='100%'
                                        className='text-very-positive'
                                        stopColor='currentColor'
                                        stopOpacity='0'
                                    />
                                </linearGradient>
                            </defs>
                            {/* Area */}
                            <path
                                d={`${wavyPathLine} L 1000 300 L 0 300 Z`}
                                fill='url(#chartGradient)'
                            />
                            {/* Line */}
                            <path
                                d={wavyPathLine}
                                fill='none'
                                className='text-very-positive'
                                stroke='currentColor'
                                strokeWidth='3'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                    </div>

                    {/* Range Selectors with Percentages */}
                    <div className='mt-4 shrink-0 grid grid-cols-7 gap-2'>
                        {timeRanges.map(range => (
                            <button
                                key={range.label}
                                className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-all ${
                                    range.active
                                        ? 'bg-[#F1F5F9]'
                                        : 'hover:bg-muted/50'
                                }`}>
                                <span
                                    className={`text-[16px] font-bold ${
                                        range.active
                                            ? 'text-foreground'
                                            : 'text-secondary'
                                    }`}>
                                    {range.label}
                                </span>
                                <span className='flex items-center gap-0.5 text-[14px] font-bold text-very-positive mt-0.5'>
                                    <ArrowUpIcon className='size-4' />
                                    {range.change}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
export default StockOverview;

