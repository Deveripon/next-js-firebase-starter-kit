import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Mail02Icon } from '@hugeicons/core-free-icons/index';
import { HugeiconsIcon } from '@hugeicons/react';
import React from 'react';

const EmailInput = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <div className={cn('relative', className)}>
            <Input
                ref={ref}
                id='email'
                type='email'
                placeholder='m@example.com'
                {...props}
            />
            <HugeiconsIcon
                size={19}
                className='absolute right-3 mr-1 top-1/2 -translate-y-1/2 pointer-events-none'
                icon={Mail02Icon}
            />
        </div>
    );
});

EmailInput.displayName = 'EmailInput';
export default EmailInput;

