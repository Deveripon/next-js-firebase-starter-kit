'use client';

import { ModeToggle } from '@/components/mode-toggle';
import logo from '@/public/logo.svg';
import { Search01Icon } from '@hugeicons/core-free-icons/index';
import { HugeiconsIcon } from '@hugeicons/react';
import { Earth, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SelectAnalysisType } from './select-analysis';
const WidgetHeader = () => {
    return (
        <div className='w-full'>
            <div className='flex h-[68px] items-center justify-between gap-6'>
                {/* Logo */}
                <div className='flex items-center shrink-0'>
                    <Link
                        href='/dashboard/market-overview'
                        className='flex items-center gap-2'>
                        <Image
                            src={logo}
                            alt='Logo'
                            width={36}
                            height={36}
                            className='shrink-0'
                        />
                        <span className='hidden sm:inline-block text-xl md:text-2xl font-semibold whitespace-nowrap'>
                            Stoxie
                        </span>
                    </Link>
                </div>

                {/* Center Actions */}
                <div className='hidden md:flex items-center flex-1 justify-center gap-4 lg:gap-6 px-4'>
                    {/* Search Bar - Responsive width */}
                    <div className='flex w-full max-w-[200px] lg:max-w-md'>
                        <div className='relative w-full'>
                            <HugeiconsIcon
                                icon={Search01Icon}
                                className='absolute left-3.5 top-1/2 -translate-y-1/2 size-[18px] text-secondary'
                            />
                            <input
                                type='text'
                                placeholder='Search...'
                                className='w-full rounded-full bg-card border border-border py-2 pl-10 pr-4 text-[14px] text-foreground placeholder-secondary/70 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all shadow-sm'
                            />
                        </div>
                    </div>

                    <div className='hidden lg:flex items-center gap-4'>
                        <button className='px-4 py-2 rounded-full bg-primary/8 dark:bg-primary/15 text-primary text-[13px] lg:text-[14px] leading-tight font-medium hover:bg-primary/15 dark:hover:bg-primary/25 transition-all whitespace-nowrap'>
                            Discover
                        </button>
                        <button className='text-[13px] lg:text-[14px] font-medium text-foreground hover:text-foreground/80 transition-colors whitespace-nowrap'>
                            Bridget AI
                        </button>
                    </div>
                </div>

                {/* Right Section - Icons */}
                <div className='flex items-center gap-1.5 md:gap-3 shrink-0'>
                    {/* Mobile Search Icon - Only visible on small screens */}
                    <button className='flex md:hidden h-9 w-9 items-center justify-center rounded-full text-foreground hover:bg-muted/50 transition-all'>
                        <HugeiconsIcon icon={Search01Icon} className='size-5' />
                    </button>
                    <div className='hidden lg:flex items-center gap-4'>
                        <SelectAnalysisType />
                    </div>

                    <ModeToggle />

                    <button className='hidden sm:flex h-9 w-9 items-center justify-center rounded-full text-foreground hover:bg-muted/50 transition-all'>
                        <Earth className='size-5' />
                    </button>

                    <button className='flex h-9 w-9 items-center justify-center rounded-full text-foreground hover:bg-muted/50 transition-all'>
                        <User className='size-5' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WidgetHeader;

