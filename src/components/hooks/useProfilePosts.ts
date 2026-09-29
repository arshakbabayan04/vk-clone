import { useEffect, useState } from "react";
import type { IPost } from "../../types";
import { useAuth } from "../providers/useAuth";
import { collection, query, where, getDocs } from "firebase/firestore";

export const useProfilePosts = () => {
  const { user, db } = useAuth();

  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user) return;

    const getProfilePosts = async () => {
      try {
        setLoading(true);
        setError('');

        const q = query(collection(db, "posts"), where("author.id", "==", user.id));
        const snapshot = await getDocs(q);
        const profilePosts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          } as IPost;
        })
        setPosts(profilePosts);
      } 
      catch (error) {
        if (error instanceof Error && error.message) {
          setError(error.message);
        }
      }
      finally {
        setLoading(false);
      }
    }

    getProfilePosts();

  }, [user, db]);

  return { posts, loading, error };

}