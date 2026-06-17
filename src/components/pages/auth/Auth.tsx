import { Container, Paper } from "@mui/material";
import LoginForm from "./LoginForm";

const Auth = () => {
  return (
    <Container maxWidth="xl">
      <Paper>
        <LoginForm />
      </Paper>
    </Container>
  );
}
 
export default Auth;