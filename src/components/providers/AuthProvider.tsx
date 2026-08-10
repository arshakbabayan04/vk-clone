import { useEffect, useMemo, useState } from "react";
import type { IUser } from "../../types";
import type { ReactNode } from "react";
import { getAuth, onAuthStateChanged} from "firebase/auth";
import { users } from "../layout/sidebar/dataUsers";
import { AuthContext } from "./AuthContext";

interface Props {
  children: ReactNode;
}

const AuthProvider = ({children}: Props) => {
  const [user, setUser] = useState<IUser | null>(null);

  const ga = getAuth()

  useEffect(() => {
    const unListen = onAuthStateChanged(ga, (authUser) => {
      setUser(authUser ? {
        id: authUser.uid,
        avatar: users[1].avatar,
        name: authUser?.displayName || ''
      } : null)
    })

    return () => {
      unListen()
    }
  }, [])

  const values = useMemo(() => ({
    user,
    setUser,
    ga
  }), [user, setUser, ga])

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
}
 
export default AuthProvider;