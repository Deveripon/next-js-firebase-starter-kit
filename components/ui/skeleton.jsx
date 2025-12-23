import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }) {
    return (
        <div
            suppressHydrationWarning
            data-slot='skeleton'
            className={cn('bg-accent animate-pulse rounded-md', className)}
            {...props}
        />
    );
}

export { Skeleton };

