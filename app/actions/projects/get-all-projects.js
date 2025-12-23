
'use server';
export const dynamic = 'force-dynamic';

import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

export async function getAllProjects() {
    try {
        const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);

        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            // Convert Firestore timestamp to string for client components
            createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || null,
        }));
    } catch (error) {
        console.error('Error in getAllProjects:', error);
        throw new Error('Failed to fetch projects');
    }
}