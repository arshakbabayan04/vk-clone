import { Container, Paper, Typography } from "@mui/material";
import LoginForm from "./LoginForm";

const Auth = () => {
  return (
    <Container maxWidth="xl">
      <Paper sx={{ p: 2, width: "100%", maxWidth: "400px" }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Authentication
        </Typography>
        <LoginForm />
      </Paper>
    </Container>
  );
}
 
export default Auth;