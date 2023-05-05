import { collection, getFirestore, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useState, useEffect } from 'react';

const useFirestore = () => {
  const [docs, setDocs] = useState([]);

  // Initialize db inside the hook
  const db = getFirestore();

  useEffect(() => {
    const photosCollection = collection(db, 'images');
    const photosQuery = query(photosCollection, orderBy('createdAt', 'desc'));

    const unsub = onSnapshot(photosQuery, (snap) => {
      let documents = [];
      snap.forEach(doc => {
        documents.push({...doc.data(), id: doc.id})
      });
      setDocs(documents)
    });
    return () => unsub();
  }, [db]);

  return { docs };
}

export default useFirestore;
