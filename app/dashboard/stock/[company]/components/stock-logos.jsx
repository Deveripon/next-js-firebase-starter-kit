import { cn } from '@/lib/utils';

export const MicrosoftLogo = ({ className }) => (
    <div className={cn('relative size-9 flex items-center justify-center bg-transparent', className)}>
        <div className='grid grid-cols-2 gap-0.5 size-5'>
            <div className='bg-[#F25022] size-2.5' />
            <div className='bg-[#7FBA00] size-2.5' />
            <div className='bg-[#00A4EF] size-2.5' />
            <div className='bg-[#FFB900] size-2.5' />
        </div>
    </div>
);

export const NvidiaLogo = ({ className }) => (
    <div className={cn('size-9 bg-black rounded-md flex items-center justify-center text-[#76B900] overflow-hidden', className)}>
        <div className='font-bold text-[8px] tracking-tighter'>NV</div>
    </div>
);

export const AppleLogo = ({ className }) => (
    <div className={cn('flex items-center justify-center size-9 text-foreground', className)}>
        <svg viewBox='0 0 24 24' fill='currentColor' className='size-7'>
            <path d='M17.8 9.6c-.9 0-2.3-.5-3.6-.5-1.9 0-3.6 1.1-4.6 1.1-.9 0-2.4-1-3.9-1.1-2-.1-3.9 1.2-4.9 3-2.1 3.6-.5 8.9 1.5 11.8 1 1.5 2.2 3.1 3.7 3 1.5-.1 2.1-1 3.9-1 1.9 0 2.4 1 3.9 1 1.6.1 2.7-1.5 3.7-2.9 1.2-1.7 1.6-3.3 1.7-3.4-.1-.1-3.2-1.2-3.3-4.9-.1-3.1 2.5-4.5 2.6-4.6-1.5-2.1-3.7-2.3-4.5-2.4zm-2.4-4c.8-1 1.4-2.4 1.2-3.8-1.2.1-2.7.8-3.5 1.8-.7.9-1.4 2.3-1.2 3.7 1.4.1 2.7-.7 3.5-1.7z' />
        </svg>
    </div>
);

export const MetaLogo = ({ className }) => (
    <div className={cn('size-9 flex items-center justify-center text-[#0668E1]', className)}>
        <svg viewBox='0 0 24 24' fill='currentColor' className='size-7'>
            <path d='M16.8 6c-2.3 0-4.3 1.2-5.5 3.2-1.2-2-3.2-3.2-5.5-3.2C2.6 6 .1 8.8.1 12.3c0 3.3 2.4 6 5.6 6 2.3 0 4.3-1.2 5.5-3.2 1.2 2 3.2 3.2 5.5 3.2 3.2 0 5.8-2.7 5.8-6.1 0-3.4-2.5-6.2-5.7-6.2zm-11 9.8c-1.8 0-3.2-1.6-3.2-3.5 0-1.9 1.4-3.5 3.2-3.5 1.7 0 3.1 1.5 3.2 3.4 0 0 0 .1 0 .1 0 1.9-1.4 3.5-3.2 3.5zm5.5-2c-.9 1.3-2 2-3.3 2 .1-.2.2-.5.3-.7 1.1-2.2 1.4-4.8 1.4-4.8s.4 2.6 1.6 4.8c.1.3.2.5.3.7-.9 0-2.1-.7-2.9-2h2.6zM16.8 16c-1.8 0-3.2-1.6-3.2-3.5 0-1.9 1.4-3.5 3.2-3.5 1.7 0 3.1 1.5 3.2 3.4 0 0 0 .1 0 .1 0 1.9-1.4 3.5-3.2 3.5z' />
        </svg>
    </div>
);

export const AlphabetLogo = ({ className }) => (
    <div className={cn('size-9 rounded-full bg-white flex items-center justify-center border border-border/50 text-foreground text-[14px] font-bold', className)}>
        <span className='text-[#4285F4]'>G</span>
    </div>
);

export const AbbVieLogo = ({ className }) => (
    <div className={cn('size-9 flex items-center justify-center bg-[#001D4B] rounded-full', className)}>
        <svg viewBox="0 0 100 100" fill="white" className="size-6">
            <path d="M15 50 c0-15 10-25 25-25 h10 v50 h-10 c-15 0-25-10-25-25 z M60 25 h25 v50 h-25 z" />
        </svg>
    </div>
);

export const MoutaiLogo = ({ className }) => (
    <div className={cn('size-9 flex items-center justify-center bg-[#E61F19] rounded-full overflow-hidden', className)}>
        <div className="size-full flex flex-col">
            <div className="h-1/2 bg-[#E61F19]" />
            <div className="h-1/2 bg-[#0047BA]" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="size-6 border-2 border-white rounded-full flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">M</span>
            </div>
        </div>
    </div>
);

export const PhilipMorrisLogo = ({ className }) => (
    <div className={cn('size-9 flex items-center justify-center bg-white border border-border rounded-lg', className)}>
        <svg viewBox="0 0 100 100" fill="#002D62" className="size-6">
            <path d="M20 20 h60 v60 h-60 z M30 30 l40 40 M70 30 l-40 40" stroke="#002D62" strokeWidth="8" />
        </svg>
    </div>
);

export const ChinaMobileLogo = ({ className }) => (
    <div className={cn('size-9 flex items-center justify-center bg-[#0066CC] rounded-full', className)}>
        <svg viewBox="0 0 100 100" fill="white" className="size-6">
            <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" />
            <circle cx="50" cy="50" r="25" fill="white" />
        </svg>
    </div>
);

export const McDonaldsLogo = ({ className }) => (
    <div className={cn('size-9 flex items-center justify-center bg-[#FFBC0D] rounded-lg', className)}>
        <span className="text-[#DA291C] text-[24px] font-black leading-none -mt-1">M</span>
    </div>
);

export const AdobeLogo = ({ className }) => (
    <div className={cn('size-9 flex items-center justify-center bg-[#FF0000] rounded-lg', className)}>
        <svg viewBox="0 0 100 100" fill="white" className="size-7">
            <path d="M50 15 L20 85 h15 l15-35 15 35 h15z" />
        </svg>
    </div>
);

export const ExorLogo = ({ className }) => (
    <div className={cn('size-9 flex items-center justify-center bg-[#0A1A3C] rounded-lg', className)}>
        <span className="text-white text-[10px] font-bold tracking-tighter">EXOR</span>
    </div>
);

export const JobyLogo = ({ className }) => (
    <div className={cn('size-9 flex items-center justify-center bg-background border border-border rounded-lg', className)}>
        <svg viewBox="0 0 100 100" fill="#00AEEF" className="size-6">
            <path d="M20 50 q30-30 60 0 q-30 30-60 0" />
        </svg>
    </div>
);

export const TubizeLogo = ({ className }) => (
    <div className={cn('size-9 flex items-center justify-center bg-[#F3F4F6] border border-border rounded-full', className)}>
        <span className="text-[#111827] text-[16px] font-bold">F</span>
    </div>
);

export const AmazonLogo = ({ className }) => (
    <div className={cn('size-9 bg-[#232F3E] rounded-lg flex flex-col items-center justify-center pt-1 px-1', className)}>
        <span className="text-white text-[12px] font-bold leading-none">a</span>
        <svg viewBox="0 0 100 40" fill="#FF9900" className="w-full h-3">
            <path d="M10 10 q40 20 80 0 l-5 10 q-35 15-70 0 z" />
        </svg>
    </div>
);
