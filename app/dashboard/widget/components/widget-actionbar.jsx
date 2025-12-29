import { Share08Icon } from '@hugeicons/core-free-icons/index';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowDownToLine, ArrowLeft } from 'lucide-react';

const WidgetActionBar = () => {
    return (
        <div className=' bg-background h-[60px] sticky z-40'>
            <div className='flex items-center justify-between h-full'>
                {/* Left side: Back + Document Title */}
                <div className='flex items-center gap-10'>
                    <button className='flex items-center gap-2.5 text-[14px] leading-[20px] font-medium text-secondary hover:text-foreground transition-colors group'>
                        <ArrowLeft className='size-4 text-secondary group-hover:text-foreground transition-colors' />
                        <span>Back</span>
                    </button>

                    <h1 className='text-[18px] leading-[24px] font-normal text-foreground tracking-tight'>
                        TSLA Report
                    </h1>
                </div>

                {/* Right side: Actions */}
                <div className='flex items-center gap-3'>
                    <button className='inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-border bg-card text-[14px] font-medium text-secondary hover:bg-card/80 hover:border-border transition-all shadow-sm'>
                        <HugeiconsIcon
                            icon={Share08Icon}
                            className='size-4 text-secondary'
                        />
                        <span>Share</span>
                    </button>

                    <button className='inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-border bg-card text-[14px] font-medium text-secondary hover:bg-card/80 hover:border-border transition-all shadow-sm'>
                        <ArrowDownToLine
                            className='size-4 text-secondary'
                            strokeWidth={1.5}
                        />
                        <span>Export</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WidgetActionBar;

