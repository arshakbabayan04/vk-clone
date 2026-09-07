import { Container, Grid } from "@mui/material";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useAuth } from "../providers/useAuth";

const Layout = () => {
  const { user } = useAuth()
  return ( 
    <>
      <Header />
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{mt: 4}}>
          {user &&
            <Grid size={3}>
              <Sidebar />
            </Grid>
          }
          <Grid size={user ? 9 : 12}>
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
 
export default Layout;