'use client';

import { auth } from '@/lib/firebase'; // Adjust to your config path
import { zodResolver } from '@hookform/resolvers/zod';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from '@/components/ui/field';
import { cn } from '@/lib/utils';
import { useTransition } from 'react';
import { toast } from 'sonner';
import EmailInput from './input/email-input';
import PasswordInput from './input/password-input';
import OAuthButtons from './o-auth-buttons';

// 1. Define Login Schema
const loginSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(1, 'Password is required'),
});

export function LoginForm({ className, ...props }) {
    const [isPending, startTransition] = useTransition();
    const [serverError, setServerError] = useState('');
    const router = useRouter();

    // 2. Setup Form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: { email: '', password: '' },
    });

    // 3. Graceful Error Mapper
    const getErrorMessage = error => {
        switch (error.code) {
            case 'auth/invalid-credential':
                return 'Invalid email or password. Please try again.';
            case 'auth/user-disabled':
                return 'This account has been disabled.';
            case 'auth/too-many-requests':
                return 'Too many failed attempts. Try again later.';
            default:
                return 'An error occurred during login. Please try again.';
        }
    };

    // 4. Submit Handler
    const onSubmit = async data => {
        startTransition(async () => {
            try {
                await signInWithEmailAndPassword(
                    auth,
                    data.email,
                    data.password
                );

                toast.success('Login successful!');
                router.push('/dashboard'); // Redirect on success
            } catch (err) {
                setServerError(getErrorMessage(err));
                toast.error(getErrorMessage(err));
            }
        });
    };

    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card className='overflow-hidden p-0'>
                <CardContent className='grid p-0 md:grid-cols-2'>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='p-6 md:p-8'>
                        <FieldGroup>
                            <div className='flex flex-col items-center gap-2 text-center'>
                                <h1 className='text-2xl font-bold'>
                                    Welcome back
                                </h1>
                                <p className='text-muted-foreground text-balance'>
                                    Login to your Stoxie account
                                </p>
                            </div>

                            <Field>
                                <FieldLabel htmlFor='email'>Email</FieldLabel>
                                <EmailInput
                                    {...register('email')}
                                    disabled={isPending}
                                />
                                {errors.email && (
                                    <p className='text-destructive text-xs mt-1'>
                                        {errors.email.message}
                                    </p>
                                )}
                            </Field>

                            <Field>
                                <div className='flex items-center'>
                                    <FieldLabel htmlFor='password'>
                                        Password
                                    </FieldLabel>
                                    <Link
                                        href='/forgot-password'
                                        className='ml-auto text-sm underline-offset-2 hover:underline'>
                                        Forgot your password?
                                    </Link>
                                </div>
                                <PasswordInput
                                    {...register('password')}
                                    id='password'
                                    placeholder='Password'
                                    disabled={isPending}
                                />
                                {errors.password && (
                                    <p className='text-destructive text-xs mt-1'>
                                        {errors.password.message}
                                    </p>
                                )}
                            </Field>

                            {/* Graceful Server Error Message */}
                            {serverError && (
                                <div className='bg-destructive/10 p-3 rounded text-destructive text-sm border border-destructive/20 text-center'>
                                    {serverError}
                                </div>
                            )}

                            <Field>
                                <Button
                                    type='submit'
                                    className='w-full'
                                    disabled={isPending}>
                                    {isPending ? 'Signing in...' : 'Login'}
                                </Button>
                            </Field>

                            <OAuthButtons />

                            <FieldDescription className='text-center'>
                                Don&apos;t have an account?{' '}
                                <Link
                                    href='/signup'
                                    className='underline underline-offset-4'>
                                    Sign up
                                </Link>
                            </FieldDescription>
                        </FieldGroup>
                    </form>
                    <div className='bg-muted relative hidden md:block'>
                        <img
                            src='/sign-up.jpg'
                            alt='Image'
                            className='absolute inset-0 h-full w-full object-cover '
                        />
                    </div>
                </CardContent>
            </Card>
            <FieldDescription className='px-6 text-center text-xs'>
                By clicking continue, you agree to our{' '}
                <a href='#' className='underline underline-offset-2'>
                    Terms of Service
                </a>{' '}
                and{' '}
                <a href='#' className='underline underline-offset-2'>
                    Privacy Policy
                </a>
                .
            </FieldDescription>
        </div>
    );
}

