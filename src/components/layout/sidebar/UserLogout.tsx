import { Button, Card } from "@mui/material";
import { signOut } from "firebase/auth";
import { useAuth } from "../../providers/useAuth";

const UserLogout = () => {
  const { ga } = useAuth();
  return ( 
    <Card
      variant="outlined"
      sx={{p: 2, py: 2, border: "none", backgroundColor: "white", borderRadius: 2}}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => signOut(ga)}
      >
        Выйти
      </Button>
    </Card>
  );
}
 
export default UserLogout;  