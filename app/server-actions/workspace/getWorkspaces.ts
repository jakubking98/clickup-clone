import { db } from '@/db/firebase/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Workspace } from '@/app/server-actions/types';

export const getWorkspaces = async (userId: string): Promise<Workspace[]> => {
  try {
    const workspacesRef = collection(db, `users/${userId}/workspaces`);

    const querySnapshot = await getDocs(workspacesRef);

    const workspaces: Workspace[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Workspace, 'id'>),
    }));

    return workspaces;
  } catch (error) {
    console.error('Błąd podczas pobierania workspaces:', error);
    throw new Error('Błąd podczas pobierania workspaces: ' + error);
  }
};
