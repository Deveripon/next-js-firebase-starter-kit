'use server';

export const dynamic = 'force-dynamic';

import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export async function getUser(userId) {
    if (!userId) return null;
    try {
        const docRef = doc(db, 'users', userId);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) return null;

        return {
            id: docSnap.id,
            ...docSnap.data(),
        };
    } catch (error) {
        console.error('Error in getUser:', error);
        throw new Error('Failed to fetch user');
    }
}