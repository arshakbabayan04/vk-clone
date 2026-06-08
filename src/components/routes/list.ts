import Home from "../pages/home/Home";
export const routes = [
  {
    path: "",
    element: Home,
    auth: false
  },
  {
    path: "profile/:id",
    element: Home,
    auth: false
  },
  {
    path: "messages",
    element: Home,
    auth: false
  },
  {
    path: "message/:id",
    element: Home,
    auth: false
  },
  {
    path: "friends/:id",
    element: Home,
    auth: false
  }
]