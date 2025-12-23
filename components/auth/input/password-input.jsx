'use client';

import { Input } from '@/components/ui/input';
import { ViewIcon, ViewOffFreeIcons } from '@hugeicons/core-free-icons/index';
import { HugeiconsIcon } from '@hugeicons/react';
import React, { useState } from 'react';

const PasswordInput = React.forwardRef(({ id, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='relative'>
            <Input
                ref={ref}
                id={id}
                type={showPassword ? 'text' : 'password'}
                {...props}
            />
            <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 mr-1 top-1/2 -translate-y-1/2'>
                <HugeiconsIcon
                    size={19}
                    className='cursor-pointer'
                    icon={showPassword ? ViewIcon : ViewOffFreeIcons}
                />
            </button>
        </div>
    );
});

PasswordInput.displayName = 'PasswordInput';
export default PasswordInput;

