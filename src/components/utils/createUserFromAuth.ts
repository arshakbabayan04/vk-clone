import type { User } from "firebase/auth"
import type { IUser } from "../../types";

export const createUserFromAuth = (authUser: User): IUser => {
  return {
    id: authUser.uid,
    avatar: '',
    name: authUser.displayName || ''
  };
};