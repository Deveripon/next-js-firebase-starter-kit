import { Card, CardContent } from '@/components/ui/card';
import { Target02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
                left: -300,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300,
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
            logo: (
                <div className='relative size-9 flex items-center justify-center bg-transparent'>
                    <div className='grid grid-cols-2 gap-0.5 size-5'>
                        <div className='bg-[#F25022] size-2.5' />
                        <div className='bg-[#7FBA00] size-2.5' />
                        <div className='bg-[#00A4EF] size-2.5' />
                        <div className='bg-[#FFB900] size-2.5' />
                    </div>
                </div>
            ),
        },
        {
            sym: 'NVDA',
            name: 'Nvidia',
            price: '$137.38',
            change: '(+1.67%)',
            target: '$140',
            badge: 'Outperform',
            badgeColor: 'bg-[#007047]',
            logo: (
                <div className='size-9 bg-black rounded-md flex items-center justify-center text-[#76B900] overflow-hidden'>
                    <div className='font-bold text-[8px] tracking-tighter'>
                        NV
                    </div>
                </div>
            ),
        },
        {
            sym: 'AAPL',
            name: 'Apple',
            price: '$201.7',
            change: '(+0.42%)',
            target: '$235',
            badge: 'Hold',
            badgeColor: 'bg-[#6D757D]',
            logo: (
                <div className='flex items-center justify-center size-9 text-foreground'>
                    <svg
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='size-7'>
                        <path d='M17.8 9.6c-.9 0-2.3-.5-3.6-.5-1.9 0-3.6 1.1-4.6 1.1-.9 0-2.4-1-3.9-1.1-2-.1-3.9 1.2-4.9 3-2.1 3.6-.5 8.9 1.5 11.8 1 1.5 2.2 3.1 3.7 3 1.5-.1 2.1-1 3.9-1 1.9 0 2.4 1 3.9 1 1.6.1 2.7-1.5 3.7-2.9 1.2-1.7 1.6-3.3 1.7-3.4-.1-.1-3.2-1.2-3.3-4.9-.1-3.1 2.5-4.5 2.6-4.6-1.5-2.1-3.7-2.3-4.5-2.4zm-2.4-4c.8-1 1.4-2.4 1.2-3.8-1.2.1-2.7.8-3.5 1.8-.7.9-1.4 2.3-1.2 3.7 1.4.1 2.7-.7 3.5-1.7z' />
                    </svg>
                </div>
            ),
        },
        {
            sym: 'META',
            name: 'Meta Platforms',
            price: '$670.9',
            change: '(+3.62%)',
            target: '$545',
            badge: 'Hold',
            badgeColor: 'bg-[#6D757D]',
            logo: (
                <div className='size-9 flex items-center justify-center text-[#0668E1]'>
                    <svg
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='size-7'>
                        <path d='M16.8 6c-2.3 0-4.3 1.2-5.5 3.2-1.2-2-3.2-3.2-5.5-3.2C2.6 6 .1 8.8.1 12.3c0 3.3 2.4 6 5.6 6 2.3 0 4.3-1.2 5.5-3.2 1.2 2 3.2 3.2 5.5 3.2 3.2 0 5.8-2.7 5.8-6.1 0-3.4-2.5-6.2-5.7-6.2zm-11 9.8c-1.8 0-3.2-1.6-3.2-3.5 0-1.9 1.4-3.5 3.2-3.5 1.7 0 3.1 1.5 3.2 3.4 0 0 0 .1 0 .1 0 1.9-1.4 3.5-3.2 3.5zm5.5-2c-.9 1.3-2 2-3.3 2 .1-.2.2-.5.3-.7 1.1-2.2 1.4-4.8 1.4-4.8s.4 2.6 1.6 4.8c.1.3.2.5.3.7-.9 0-2.1-.7-2.9-2h2.6zM16.8 16c-1.8 0-3.2-1.6-3.2-3.5 0-1.9 1.4-3.5 3.2-3.5 1.7 0 3.1 1.5 3.2 3.4 0 0 0 .1 0 .1 0 1.9-1.4 3.5-3.2 3.5z' />
                    </svg>
                </div>
            ),
        },
        {
            sym: 'GOOGL',
            name: 'Alphabet',
            price: '$178.2',
            change: '+1.1%',
            target: '$190',
            badge: 'Buy',
            badgeColor: 'bg-[#C94A53]',
            logo: (
                <div className='size-9 rounded-full bg-white flex items-center justify-center border border-border/50 text-foreground text-[14px] font-bold'>
                    <span className='text-[#4285F4]'>G</span>
                </div>
            ),
        },
    ];

    return (
        <div className='pt-2 mb-2'>
            <h2 className='text-[18px] leading-[28px] font-bold text-foreground mb-6'>
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
                    className='flex gap-4 overflow-x-auto pb-6 pt-2 no-scrollbar -mx-4 px-4'>
                    {stocks.map((stock, i) => (
                        <Card
                            key={i}
                            className='min-w-[280px] rounded-xl border-border bg-card shadow-sm hover:shadow-md transition-all cursor-pointer'>
                            <CardContent className='p-5'>
                                {/* Top Row: Logo, Name, Badge */}
                                <div className='flex items-start justify-between mb-6'>
                                    <div className='flex items-center gap-3'>
                                        {stock.logo}
                                        <div className='flex flex-col'>
                                            <span className='text-[15px] font-bold text-foreground leading-[18px]'>
                                                {stock.sym}
                                            </span>
                                            <span className='text-[12px] text-secondary font-normal leading-[16px]'>
                                                {stock.name}
                                            </span>
                                        </div>
                                    </div>
                                    <span
                                        className={`px-3 py-1 rounded-full text-[11px] font-bold text-white shadow-sm ${stock.badgeColor}`}>
                                        {stock.badge}
                                    </span>
                                </div>

                                {/* Middle Row: Close Price */}
                                <div className='flex items-end justify-between mb-2'>
                                    <span className='text-[12px] text-secondary font-normal'>
                                        Close Price
                                    </span>
                                    <div className='flex items-center gap-1.5'>
                                        <span className='text-[14px] font-bold text-foreground'>
                                            {stock.price}
                                        </span>
                                        <span className='text-[12px] font-bold text-[#007047]'>
                                            {stock.change}
                                        </span>
                                    </div>
                                </div>

                                {/* Bottom Row: Price Target */}
                                <div className='flex items-center justify-between'>
                                    <span className='text-[12px] text-secondary font-normal'>
                                        Price Target
                                    </span>
                                    <div className='flex items-center gap-1.5'>
                                        <HugeiconsIcon
                                            icon={Target02Icon}
                                            className='size-3.5 text-secondary'
                                        />
                                        <span className='text-[14px] font-bold text-foreground'>
                                            {stock.target}
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
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

