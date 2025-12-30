'use client';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Target02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
    AlphabetLogo,
    AppleLogo,
    MetaLogo,
    MicrosoftLogo,
    NvidiaLogo,
} from '../../stock/[company]/components/stock-logos';

const DiscoverStocks = () => {
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } =
                scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    useEffect(() => {
        checkScroll();
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScroll);
            window.addEventListener('resize', checkScroll);
        }
        return () => {
            if (container) {
                container.removeEventListener('scroll', checkScroll);
            }
            window.removeEventListener('resize', checkScroll);
        };
    }, []);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -320,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 320,
                behavior: 'smooth',
            });
        }
    };

    const recommendations = [
        {
            sym: 'MSFT',
            name: 'Microsoft Corporation',
            price: '461.97',
            change: '+0.35%',
            isPositive: true,
            target: '425.25',
            currency: '$',
            logo: <MicrosoftLogo />,
        },
        {
            sym: 'NVDA',
            name: 'Nvidia Corporation',
            price: '137.38',
            change: '+1.67%',
            isPositive: true,
            target: '140.00',
            currency: '$',
            logo: <NvidiaLogo />,
        },
        {
            sym: 'AAPL',
            name: 'Apple Inc.',
            price: '201.70',
            change: '+0.42%',
            isPositive: true,
            target: '235.00',
            currency: '$',
            logo: <AppleLogo />,
        },
        {
            sym: 'META',
            name: 'Meta Platforms',
            price: '670.90',
            change: '+3.62%',
            isPositive: true,
            target: '545.00',
            currency: '$',
            logo: <MetaLogo />,
        },
        {
            sym: 'GOOGL',
            name: 'Alphabet Inc.',
            price: '178.20',
            change: '+1.10%',
            isPositive: true,
            target: '190.00',
            currency: '$',
            logo: <AlphabetLogo />,
        },
    ];

    return (
        <div className='py-10'>
            <div className='container mx-auto px-6 lg:px-20'>
                {/* Main Header - Centered */}
                <div className='flex flex-col items-center text-center mb-10'>
                    <h1 className='text-[32px] font-medium text-foreground mb-2'>
                        Discover Stocks
                    </h1>
                    <p className='text-[14px] text-secondary font-normal max-w-2xl'>
                        Stay ahead with AI-powered stock ideas and key market
                        movers
                    </p>
                </div>

                {/* Sub-Header - Left Aligned */}
                <div className='mb-6'>
                    <h3 className='text-[18px] font-medium text-foreground'>
                        Top Recommendation
                    </h3>
                </div>

                {/* Slider Component */}
                <div className='relative group px-1'>
                    {/* Left Button */}
                    {canScrollLeft && (
                        <button
                            onClick={scrollLeft}
                            className='absolute -left-5 top-[40%] -translate-y-1/2 z-20 size-11 rounded-full bg-card shadow-lg border border-border flex items-center justify-center text-foreground hover:bg-card/80 transition-all focus:outline-none active:scale-95'>
                            <ArrowLeft className='size-5 text-secondary' />
                        </button>
                    )}

                    {/* Scroll Container */}
                    <div
                        ref={scrollContainerRef}
                        className='flex gap-4 overflow-x-auto no-scrollbar pb-4 pt-1'>
                        {recommendations.map((stock, i) => (
                            <Link
                                key={i}
                                href={`/dashboard/stock/${stock.sym}`}>
                                <Card className='min-w-[270px] rounded-[16px] border border-border/60 bg-card shadow-sm hover:shadow-md transition-all cursor-pointer'>
                                    <CardContent className='p-4'>
                                        {/* Top Row */}
                                        <div className='flex items-start justify-between mb-5'>
                                            <div className='flex items-center gap-3'>
                                                <div className='scale-90 origin-left shrink-0'>
                                                    {stock.logo}
                                                </div>
                                                <div className='flex flex-col gap-0'>
                                                    <span className='text-[14px] font-bold text-[#111827] leading-tight'>
                                                        {stock.sym}
                                                    </span>
                                                    <span className='text-[11px] text-tertiary font-medium line-clamp-1'>
                                                        {stock.name}
                                                    </span>
                                                </div>
                                            </div>
                                            <span className='bg-very-positive text-white px-3 py-0.5 rounded-full text-[9px] font-bold tracking-tight'>
                                                OUTPERFORM
                                            </span>
                                        </div>

                                        {/* Stats Rows */}
                                        <div className='space-y-2.5'>
                                            <div className='flex items-center justify-between'>
                                                <span className='text-[12px] text-secondary font-medium'>
                                                    Last Close Price
                                                </span>
                                                <div className='flex items-center gap-1.5'>
                                                    <span className='text-[14px] font-bold text-[#111827]'>
                                                        {stock.currency}
                                                        {stock.price}
                                                    </span>
                                                    <span
                                                        className={cn(
                                                            'text-[11px] font-bold',
                                                            stock.isPositive
                                                                ? 'text-positive'
                                                                : 'text-negative'
                                                        )}>
                                                        ({stock.change})
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='flex items-center justify-between'>
                                                <span className='text-[12px] text-secondary font-medium'>
                                                    Price Target
                                                </span>
                                                <div className='flex items-center gap-2'>
                                                    <HugeiconsIcon
                                                        icon={Target02Icon}
                                                        className='size-3 text-[#9CA3AF]'
                                                    />
                                                    <span className='text-[14px] font-bold text-[#111827]'>
                                                        {stock.currency}
                                                        {stock.target}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>

                    {/* Right Button */}
                    {canScrollRight && (
                        <button
                            onClick={scrollRight}
                            className='absolute -right-5 top-[40%] -translate-y-1/2 z-20 size-11 rounded-full bg-white dark:bg-card shadow-lg border border-border flex items-center justify-center text-foreground hover:bg-gray-50 transition-all focus:outline-none active:scale-95'>
                            <ArrowRight className='size-5 text-secondary' />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DiscoverStocks;

