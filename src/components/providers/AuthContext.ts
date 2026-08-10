import type { Auth } from "firebase/auth";
import { createContext } from "react";
import type { IUser, TypeSetState } from "../../types";

interface IContext {
  user: IUser | null
  setUser: TypeSetState<IUser | null>
  ga: Auth
}

export const AuthContext = createContext<IContext>({} as IContext);