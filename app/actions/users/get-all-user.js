'use server';
export const dynamic = 'force-dynamic';


import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function getAllUsers() {
    try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error('Error in getAllUsers:', error);
        throw new Error('Failed to fetch users');
    }
}