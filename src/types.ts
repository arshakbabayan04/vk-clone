export type TypeSetState<T> = React.Dispatch<React.SetStateAction<T>>;

export interface IUser {
  id: string;
  name: string;
  avatar: string;
  online?: boolean;
}

export interface IPost {
  id: string;
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

export interface IMessage {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  createdAt: string;
}