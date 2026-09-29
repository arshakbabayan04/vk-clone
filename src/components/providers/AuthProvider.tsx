import { useEffect, useMemo, useState } from "react";
import type { IUser } from "../../types";
import type { ReactNode } from "react";
import { getAuth, onAuthStateChanged} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { AuthContext } from "./AuthContext";
import { createUserFromAuth } from "../utils/createUserFromAuth";

interface Props {
  children: ReactNode;
}

const AuthProvider = ({children}: Props) => {
  const [user, setUser] = useState<IUser | null>(null);

  const ga = getAuth()
  const db = getFirestore()

  useEffect(() => {
    const unListen = onAuthStateChanged(ga, (authUser) => {
      if (authUser)
        setUser(createUserFromAuth(authUser))
      else 
        setUser(null)
    })

    return () => {
      unListen()
    }
  }, [])

  const values = useMemo(() => ({
    user,
    setUser,
    ga, 
    db
  }), [user, setUser, ga, db])

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
}
 
export default AuthProvider;