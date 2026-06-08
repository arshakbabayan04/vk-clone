export type TypeSetState<T> = React.Dispatch<React.SetStateAction<T>>;

export interface IUser {
  id: string;
  name: string;
  avatar: string;
  online?: boolean;
}

export interface IPost {
  author: IUser;
  createdAt: string;
  content: string;
  images?: string[];
}

export interface IMenuItem {
  title: string;
  link: string;
  icon: React.ComponentType;
}