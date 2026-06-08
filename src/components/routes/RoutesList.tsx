import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routes } from "./list";
import Layout from "../layout/Layout";

const RoutesList = () => { 
  const isAuth = true;
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          {routes.map(route => {
            if (route.auth && !isAuth) {
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