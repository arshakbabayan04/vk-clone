import { Grid } from "@mui/material";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return ( 
    <>
      <Header />
      <Grid container spacing={2} sx={{mx: 10, mt: 4}}>
        <Grid size={3}>
          <Sidebar />
        </Grid>
        <Grid size={9}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
}
 
export default Layout;