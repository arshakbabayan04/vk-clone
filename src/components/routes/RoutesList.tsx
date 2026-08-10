import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routes } from "./list";
import Layout from "../layout/Layout";
import { useAuth } from "../providers/useAuth";

const RoutesList = () => { 
  const {user} = useAuth()
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          {routes.map(route => {
            if (route.auth && !user) {
              return null;
            }
            return (
            <Route 
              key={route.path} 
              path={route.path} 
              element={<route.element />} />
            )
          })}
        </Route>
      </Routes>
    </Router>  
  );
}
 
export default RoutesList;