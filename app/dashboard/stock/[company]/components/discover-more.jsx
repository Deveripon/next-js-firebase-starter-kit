'use client';
import { Card, CardContent } from '@/components/ui/card';
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
} from './stock-logos';

const DiscoverMore = () => {
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

    const stocks = [
        {
            sym: 'MSFT',
            name: 'Microsoft',
            price: '$461.97',
            change: '(+0.35%)',
            target: '$425.25',
            badge: 'Buy',
            badgeColor: 'bg-[#007047]',
            logo: <MicrosoftLogo />,
        },
        {
            sym: 'NVDA',
            name: 'Nvidia',
            price: '$137.38',
            change: '(+1.67%)',
            target: '$140',
            badge: 'Outperform',
            badgeColor: 'bg-[#007047]',
            logo: <NvidiaLogo />,
        },
        {
            sym: 'AAPL',
            name: 'Apple',
            price: '$201.7',
            change: '(+0.42%)',
            target: '$235',
            badge: 'Hold',
            badgeColor: 'bg-[#6D757D]',
            logo: <AppleLogo />,
        },
        {
            sym: 'META',
            name: 'Meta Platforms',
            price: '$670.9',
            change: '(+3.62%)',
            target: '$545',
            badge: 'Hold',
            badgeColor: 'bg-[#6D757D]',
            logo: <MetaLogo />,
        },
        {
            sym: 'AAPL',
            name: 'Apple',
            price: '$201.7',
            change: '(+0.42%)',
            target: '$235',
            badge: 'Hold',
            badgeColor: 'bg-[#6D757D]',
            logo: <AppleLogo />,
        },
        {
            sym: 'GOOGL',
            name: 'Alphabet',
            price: '$178.2',
            change: '+1.1%',
            target: '$190',
            badge: 'Buy',
            badgeColor: 'bg-[#C94A53]',
            logo: <AlphabetLogo />,
        },
        {
            sym: 'AAPL',
            name: 'Apple',
            price: '$201.7',
            change: '(+0.42%)',
            target: '$235',
            badge: 'Hold',
            badgeColor: 'bg-[#6D757D]',
            logo: <AppleLogo />,
        },
        {
            sym: 'AAPL',
            name: 'Apple',
            price: '$201.7',
            change: '(+0.42%)',
            target: '$235',
            badge: 'Hold',
            badgeColor: 'bg-[#6D757D]',
            logo: <AppleLogo />,
        },
        {
            sym: 'AAPL',
            name: 'Apple',
            price: '$201.7',
            change: '(+0.42%)',
            target: '$235',
            badge: 'Hold',
            badgeColor: 'bg-[#6D757D]',
            logo: <AppleLogo />,
        },
        {
            sym: 'AAPL',
            name: 'Apple',
            price: '$201.7',
            change: '(+0.42%)',
            target: '$235',
            badge: 'Hold',
            badgeColor: 'bg-[#6D757D]',
            logo: <AppleLogo />,
        },
    ];

    return (
        <div className='pt-1 mb-1'>
            <h2 className='text-[16px] leading-[24px] font-bold text-foreground mb-4'>
                Discover More
            </h2>

            <div className='relative'>
                {/* Left Gradient + Button */}
                {canScrollLeft && (
                    <div className='absolute -left-[18px] top-0 bottom-4 w-28 bg-linear-to-r from-background via-background/80 to-transparent pointer-events-none flex items-center justify-start pl-1 z-10'>
                        <button
                            onClick={scrollLeft}
                            className='pointer-events-auto size-10 rounded-full bg-white dark:bg-card shadow-md border border-border flex items-center justify-center text-foreground hover:bg-gray-50 dark:hover:bg-muted transition-transform active:scale-95'>
                            <ArrowLeft className='size-5 text-foreground/80' />
                        </button>
                    </div>
                )}

                <div
                    ref={scrollContainerRef}
                    className='flex gap-3.5 overflow-x-auto pb-4 pt-1 no-scrollbar -mx-4 px-4'>
                    {stocks.map((stock, i) => (
                        <Link key={i} href={`/dashboard/stock/${stock.sym}`}>
                            <Card className='min-w-[240px] rounded-xl border-border bg-card shadow-sm hover:shadow-md transition-all cursor-pointer'>
                                <CardContent className='p-4'>
                                    {/* Top Row: Logo, Name, Badge */}
                                    <div className='flex items-start justify-between mb-4'>
                                        <div className='flex items-center gap-2.5'>
                                            <div className='scale-90 origin-left'>
                                                {stock.logo}
                                            </div>
                                            <div className='flex flex-col'>
                                                <span className='text-[14px] font-bold text-foreground leading-[16px]'>
                                                    {stock.sym}
                                                </span>
                                                <span className='text-[11px] text-secondary font-normal leading-[14px]'>
                                                    {stock.name}
                                                </span>
                                            </div>
                                        </div>
                                        <span
                                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white shadow-sm ${stock.badgeColor}`}>
                                            {stock.badge}
                                        </span>
                                    </div>

                                    {/* Middle Row: Close Price */}
                                    <div className='flex items-end justify-between mb-1.5'>
                                        <span className='text-[11px] text-secondary font-normal'>
                                            Close Price
                                        </span>
                                        <div className='flex items-center gap-1'>
                                            <span className='text-[13px] font-bold text-foreground'>
                                                {stock.price}
                                            </span>
                                            <span className='text-[11px] font-bold text-[#007047]'>
                                                {stock.change}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Bottom Row: Price Target */}
                                    <div className='flex items-center justify-between'>
                                        <span className='text-[11px] text-secondary font-normal'>
                                            Price Target
                                        </span>
                                        <div className='flex items-center gap-1'>
                                            <HugeiconsIcon
                                                icon={Target02Icon}
                                                className='size-3 text-secondary'
                                            />
                                            <span className='text-[13px] font-bold text-foreground'>
                                                {stock.target}
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* Right Gradient + Button */}
                {canScrollRight && (
                    <div className='absolute -right-[18px] top-0 bottom-4 w-28 bg-linear-to-l from-background via-background/80 to-transparent pointer-events-none flex items-center justify-end pr-1 z-10'>
                        <button
                            onClick={scrollRight}
                            className='pointer-events-auto size-10 rounded-full bg-white dark:bg-card shadow-md border border-border flex items-center justify-center text-foreground hover:bg-gray-50 dark:hover:bg-muted transition-transform active:scale-95'>
                            <ArrowRight className='size-5 text-foreground/80' />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DiscoverMore;

