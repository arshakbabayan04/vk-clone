import Auth from "../pages/auth/Auth";
import Friends from "../pages/friends/Friends";
import Home from "../pages/home/Home";
import Conversation from "../pages/messages/Conversation";
import Messages from "../pages/messages/Messages";
import Profile from "../pages/profile/Profile";
export const routes = [
  {
    path: "",
    element: Home,
    auth: false
  },
  {
    path: "profile/:id",
    element: Profile,
    auth: false
  },
  {
    path: "messages",
    element: Messages,
    auth: false
  },
  {
    path: "message/:id",
    element: Conversation,
    auth: false
  },
  {
    path: "friends/:id",
    element: Friends,
    auth: false
  },
  {
    path: "auth",
    element: Auth,
    auth: false
  }
]