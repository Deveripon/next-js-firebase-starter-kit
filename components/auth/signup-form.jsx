'use client';

import { auth, db } from '@/lib/firebase';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
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
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { toast } from 'sonner';
import EmailInput from './input/email-input';
import PasswordInput from './input/password-input';
import OAuthButtons from './o-auth-buttons';

// Validation Schema
const signupSchema = z
    .object({
        email: z.string().email('Please enter a valid email address'),
        password: z.string().min(8, 'Password must be at least 8 characters'),
        confirmPassword: z.string(),
    })
    .refine(data => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'],
    });

const getFirebaseErrorMessage = error => {
    switch (error.code) {
        case 'auth/email-already-in-use':
            return 'This email is already registered. Try logging in instead.';
        case 'auth/invalid-email':
            return 'The email address is not valid.';
        case 'auth/weak-password':
            return 'The password is too weak. Use a mix of letters and numbers.';
        case 'auth/network-request-failed':
            return 'Connection error. Please check your internet.';
        default:
            return 'An unexpected error occurred. Please try again.';
    }
};

export function SignupForm({ className, ...props }) {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState('');
    const router = useRouter();
    // Initialize Hook Form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    // Handle Firebase Submission
    const onSubmit = async data => {
        startTransition(async () => {
            setError(''); // Clear previous errors
            try {
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    data.email,
                    data.password
                );
                const user = userCredential.user;

                // Create a user profile document in Firestore
                await setDoc(doc(db, 'users', user.uid), {
                    email: user.email,
                    createdAt: new Date().toISOString(),
                    role: 'user', // custom field
                    preferences: { theme: 'dark' },
                });

                if (user) {
                    toast.success('Account created successfully');
                    router.push('/dashboard');
                }
            } catch (err) {
                const message = getFirebaseErrorMessage(err);
                setError(message);

                toast.error(message || 'Failed to create account');
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
                                    Create your account
                                </h1>
                                <p className='text-muted-foreground text-sm text-balance'>
                                    Enter your email below to create your
                                    account
                                </p>
                            </div>

                            {/* Email Field */}
                            <Field>
                                <FieldLabel htmlFor='email'>Email</FieldLabel>
                                <EmailInput
                                    {...register('email')}
                                    id='email'
                                    disabled={isPending}
                                />
                                {errors.email && (
                                    <p className='text-destructive text-xs'>
                                        {errors.email.message}
                                    </p>
                                )}
                            </Field>

                            {/* Password Fields */}
                            <Field>
                                <div className='grid grid-cols-2 gap-4'>
                                    <Field>
                                        <FieldLabel htmlFor='password'>
                                            Password
                                        </FieldLabel>
                                        <PasswordInput
                                            {...register('password')}
                                            id='password'
                                            placeholder='Password'
                                            disabled={isPending}
                                        />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor='confirm-password'>
                                            Confirm
                                        </FieldLabel>
                                        <PasswordInput
                                            {...register('confirmPassword')}
                                            id='confirm-password'
                                            placeholder='Confirm'
                                            disabled={isPending}
                                        />
                                    </Field>
                                </div>
                                {(errors.password ||
                                    errors.confirmPassword) && (
                                    <p className='text-destructive text-xs mt-1'>
                                        {errors.password?.message ||
                                            errors.confirmPassword?.message}
                                    </p>
                                )}
                            </Field>

                            {error && (
                                <p className='text-destructive text-sm text-center'>
                                    {error}
                                </p>
                            )}

                            <Button
                                type='submit'
                                className='w-full'
                                disabled={isPending}>
                                {isPending
                                    ? 'Creating account...'
                                    : 'Create Account'}
                            </Button>

                            <OAuthButtons />

                            <FieldDescription className='text-center'>
                                Already have an account?{' '}
                                <Link
                                    href='/login'
                                    className='underline underline-offset-4'>
                                    Sign in
                                </Link>
                            </FieldDescription>
                        </FieldGroup>
                    </form>
                    <div className='bg-muted relative hidden md:block'>
                        <img
                            src='/sign-up.jpg'
                            alt='Sign up background'
                            className='absolute inset-0 h-full w-full object-cover '
                        />
                    </div>
                </CardContent>
            </Card>
            <FieldDescription className='px-6 text-center'>
                By clicking continue, you agree to our{' '}
                <a href='#' className='underline underline-offset-4'>
                    Terms of Service
                </a>{' '}
                and{' '}
                <a href='#' className='underline underline-offset-4'>
                    Privacy Policy
                </a>
                .
            </FieldDescription>
        </div>
    );
}

