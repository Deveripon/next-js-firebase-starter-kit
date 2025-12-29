'use client';

import { ModeToggle } from '@/components/mode-toggle';
import logo from '@/public/logo.svg';
import { Search01Icon } from '@hugeicons/core-free-icons/index';
import { HugeiconsIcon } from '@hugeicons/react';
import { Earth, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const WidgetHeader = () => {
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
            className={`sticky top-0 h-[68px] z-50 transition-all duration-300 ${
                scrolled
                    ? 'border-b border-border/40 bg-background shadow-sm'
                    : 'bg-background'
            }`}>
            <div className='mx-auto px-6 sm:px-8 lg:px-40   '>
                <div className='flex h-[68px] items-center justify-between gap-6'>
                    {/* Logo */}
                    <div className='flex items-center'>
                        <Link
                            href='/widget'
                            className='h-full w-[40px] flex items-center gap-2'>
                            <Image
                                src={logo}
                                alt='Logo'
                                width={40}
                                height={40}
                            />
                            <span className='text-2xl font-semibold'>
                                Stoxie
                            </span>
                        </Link>
                    </div>

                    {/* Center Actions */}
                    <div className='flex items-center gap-6'>
                        {/* Search Bar */}
                        <div className='flex flex-1 max-w-xs'>
                            <div className='relative w-full'>
                                <HugeiconsIcon
                                    icon={Search01Icon}
                                    className='absolute left-3.5 top-1/2 -translate-y-1/2 size-[18px] text-secondary'
                                />
                                <input
                                    type='text'
                                    placeholder='Search for company'
                                    className='w-full min-w-[300px] rounded-full bg-card border border-border py-2 pl-10 pr-4 text-[14px] text-foreground placeholder-secondary/70 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all shadow-sm'
                                />
                            </div>
                        </div>
                        <button className='px-4 py-2 rounded-full bg-primary/8 dark:bg-primary/15 text-primary text-[14px] leading-[20px] font-normal hover:bg-primary/15 dark:hover:bg-primary/25 transition-all'>
                            Discover
                        </button>
                        <button className='text-[14px] font-normal text-foreground hover:text-foreground/80 transition-colors'>
                            Bridget AI
                        </button>
                    </div>

                    {/* Right Section - Icons */}
                    <div className='flex items-center gap-3'>
                        <ModeToggle />

                        <button className='flex h-9 w-9 items-center justify-center rounded-full text-foreground hover:text-foreground hover:bg-muted/50 transition-all'>
                            <Earth className='size-5' />
                        </button>

                        <button className='flex h-9 w-9 items-center justify-center rounded-full text-foreground hover:text-foreground hover:bg-muted/50 transition-all'>
                            <User className='size-5' />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default WidgetHeader;

