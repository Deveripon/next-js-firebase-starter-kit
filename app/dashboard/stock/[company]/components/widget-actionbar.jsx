'use client';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { Share08Icon } from '@hugeicons/core-free-icons/index';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    ArrowDownToLine,
    ArrowLeft,
    ArrowLeftRight,
    Bell,
    Loader2,
    MoreVertical,
    Star,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

const WidgetActionBar = ({ company }) => {
    const router = useRouter();
    const [isPremium] = useState(false); // Simulated membership status
    const [showUpgradeModal, setShowUpgradeModal] = useState(false);
    const [isUpgrading, setIsUpgrading] = useState(false);
    const [pendingAction, setPendingAction] = useState('');

    const handleAction = actionName => {
        if (!isPremium) {
            setPendingAction(actionName);
            setShowUpgradeModal(true);
            return;
        }
        // Logic for premium users
        toast.success(`Successfully ${actionName.toLowerCase()}!`);
    };

    const handleUpgrade = async () => {
        setIsUpgrading(true);
        // Simulate a network request
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsUpgrading(false);
        setShowUpgradeModal(false);

        toast.success('Membership upgraded successfully!');

        // Wait a bit before redirecting for better UX
        setTimeout(() => {
            router.push('/dashboard/market-overview');
            toast.success(`${pendingAction} successful!`);
        }, 500);
    };

    const ActionButton = ({
        icon: Icon,
        hIcon,
        children,
        className,
        actionName,
        ...props
    }) => (
        <button
            onClick={() => handleAction(actionName || children)}
            className={cn(
                'inline-flex items-center gap-2 px-3 py-2 rounded-sm lg:border lg:border-border lg:bg-card text-[14px] font-medium text-secondary lg:hover:bg-card/80 lg:hover:border-border transition-all lg:shadow-sm group',
                className
            )}
            {...props}>
            {hIcon ? (
                <HugeiconsIcon
                    icon={hIcon}
                    className='size-5 text-foreground lg:text-secondary group-hover:text-foreground transition-colors'
                />
            ) : (
                <Icon
                    className='size-5 text-foreground lg:text-secondary group-hover:text-foreground transition-colors'
                    strokeWidth={1.5}
                />
            )}
            <span className='hidden lg:inline text-[14px]'>{children}</span>
        </button>
    );

    return (
        <div className='bg-background h-[60px] sticky z-40'>
            <div className='flex items-center justify-between h-full'>
                {/* Left side: Back + Document Title */}
                <div className='flex items-center gap-2 lg:gap-5'>
                    <button
                        onClick={() => router.back()}
                        className='flex items-center gap-2.5 text-[14px] leading-[20px] font-medium text-foreground transition-colors group'>
                        <ArrowLeft className='size-6 lg:size-5 text-secondary group-hover:text-foreground transition-colors' />
                        <span className='hidden lg:inline text-[14px]'>
                            Back
                        </span>
                    </button>

                    <h1 className='text-[18px] leading-[24px] font-normal text-foreground tracking-tight'>
                        {company} Report
                    </h1>
                </div>

                {/* Right side: Actions */}
                <div className='flex items-center gap-2 lg:gap-3'>
                    <ActionButton icon={Star} actionName='Added to Watchlist'>
                        Watchlist
                    </ActionButton>

                    <ActionButton
                        hIcon={Share08Icon}
                        actionName='Shared with friends'>
                        Share
                    </ActionButton>

                    <ActionButton
                        icon={ArrowDownToLine}
                        actionName='Report Exported'>
                        Export
                    </ActionButton>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className='inline-flex items-center gap-2 px-2 py-2 rounded-sm  text-[14px] font-medium text-secondary  transition-all '>
                                <MoreVertical className='size-5 text-foreground' />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align='end'
                            className='w-56 rounded-xl border-border bg-card shadow-lg'>
                            <DropdownMenuItem
                                onClick={() => handleAction('Set Alert')}
                                className='gap-2.5 py-2.5 text-secondary hover:text-foreground cursor-pointer focus:bg-muted/50'>
                                <Bell className='size-4' strokeWidth={1.5} />
                                <span className='text-[14px]'>Set Alerts</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => handleAction('Asset Comparison')}
                                className='gap-2.5 py-2.5 text-secondary hover:text-foreground cursor-pointer focus:bg-muted/50'>
                                <ArrowLeftRight
                                    className='size-4'
                                    strokeWidth={1.5}
                                />
                                <span className='text-[14px]'>
                                    Compare Asset
                                </span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* Upgrade Membership Modal */}
            <AlertDialog
                open={showUpgradeModal}
                onOpenChange={setShowUpgradeModal}>
                <AlertDialogContent className='max-w-[400px] rounded-xl'>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Premium Feature</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action requires a premium membership. Upgrade
                            to Stoxie Pro to access advanced tools, watchlists,
                            and deep analytics.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className='flex gap-2 sm:gap-0 font-roboto'>
                        <AlertDialogCancel disabled={isUpgrading}>
                            Later
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={e => {
                                e.preventDefault();
                                handleUpgrade();
                            }}
                            disabled={isUpgrading}
                            className='bg-primary hover:bg-primary/90 min-w-[100px]'>
                            {isUpgrading ? (
                                <>
                                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                    Processing
                                </>
                            ) : (
                                'Upgrade'
                            )}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default WidgetActionBar;

