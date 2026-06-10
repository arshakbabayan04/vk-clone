import { Container, Grid } from "@mui/material";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return ( 
    <>
      <Header />
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{mt: 4}}>
          <Grid size={3}>
            <Sidebar />
          </Grid>
          <Grid size={9}>
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
 
export default Layout;