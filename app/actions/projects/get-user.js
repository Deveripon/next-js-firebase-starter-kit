'use server';

import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export async function getProject(projectId) {
    if (!projectId) return null;
    try {
        const docRef = doc(db, 'projects', projectId);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) return null;

        return {
            id: docSnap.id,
            ...docSnap.data(),
            createdAt: docSnap.data().createdAt?.toDate?.()?.toISOString() || null,
        };
    } catch (error) {
        console.error('Error in getProject:', error);
        throw new Error('Failed to fetch project');
    }
}